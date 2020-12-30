export default {
    fonts: {
        body:
            'Nunito, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        heading:
            'Nunito, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
    },
    fontWeights: {
        normal: 400,
        heading: 600,
        semiBold: 600,
        bold: 700,
    },
    styles: {
        global: {
            body: {
                bg: 'gray.700',
                color: 'gray.50',
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                _focus: {
                    boxShadow: 'none',
                },
            },
        },
        Link: {
            baseStyle: {
                _focus: {
                    boxShadow: 'none',
                },
            },
        },
    },
};
