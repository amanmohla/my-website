import SiteLayout from '../components/layout';
import { GetServerSideProps } from 'next';
import Chart from 'chart.js';
import axios from 'axios';
import format from 'date-fns/format';
import sub from 'date-fns/sub';
import isAfter from 'date-fns/isAfter';
import { useEffect } from 'react';

const getExchangeRatesForCurrency = async (
    currency: string,
    baseCurrency: string
): Promise<any> => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const monthAgo = format(
        sub(new Date(), {
            months: 1,
        }),
        'yyyy-MM-dd'
    );
    const response = await axios.get(
        `https://api.exchangeratesapi.io/history?start_at=${monthAgo}&end_at=${today}&symbols=${currency}&base=${baseCurrency}`
    );
    if (response && response.status === 200) {
        const rates = response.data.rates;
        return Object.keys(rates)
            .map((exchangeDate) => ({
                exchangeDate,
                rate: rates[exchangeDate][currency],
            }))
            .sort((r1, r2) => {
                if (
                    isAfter(
                        new Date(r1.exchangeDate),
                        new Date(r2.exchangeDate)
                    )
                ) {
                    return 1;
                }
                return -1;
            });
    }
    return undefined;
};

const ChartsPage: React.FC<any> = ({
    rates,
    averageRate,
    baseCurrency = 'AUD',
}: any) => {
    useEffect(() => {
        const element: any = document.getElementById('test');
        const ctx = element.getContext('2d');
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: rates.map((r: any) => r.exchangeDate),
                datasets: [
                    {
                        label: `Exchange rate for ${baseCurrency} $1`,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(180, 180, 132, 1)',
                        borderWidth: 1,
                        data: rates.map((r: any) => r.rate),
                    },
                    {
                        label: `Average rate ${averageRate}`,
                        data: Array(rates.length).fill(averageRate),
                        backgroundColor: 'rgba(255, 255, 250, 0.2)',
                        // Changes this dataset to become a line
                        type: 'line',
                    },
                ],
            },

            // Configuration options go here
            options: {
                legend: { display: true },
                title: {
                    display: true,
                    text: `Value of ${baseCurrency} $1 in INR`,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    },
                },
                animation: {
                    duration: 200, // general animation time
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false,
                            },
                        },
                    ],
                },
            },
        });
    }, []);
    return (
        <SiteLayout>
            <section>
                <div className="chartjs-wrapper">
                    <canvas id="test" width="1200" />
                </div>
            </section>
        </SiteLayout>
    );
};

export default ChartsPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const rates = await getExchangeRatesForCurrency('INR', 'AUD');
    const averageRate =
        rates.reduce((s: number, r: any) => s + r.rate, 0) / rates.length;
    return {
        props: {
            rates,
            averageRate,
        }, // will be passed to the page component as props
    };
};
