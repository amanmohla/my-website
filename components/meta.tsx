import Head from 'next/head';
import { SITE_DESCRIPTION, SITE_NAME } from '../lib/constants';

const Meta: React.FC = () => {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000" />
            <meta name="title" content={SITE_NAME} />
            <meta name="description" content={SITE_DESCRIPTION} />
            <title>{SITE_NAME}</title>
        </Head>
    );
};

export default Meta;
