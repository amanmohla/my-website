export default {
    layout: {
        container: {
            maxWidth: '768px',
            minHeight: '100vh',
            margin: '0 auto',
            padding: 4,
        },
    },
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body:
            'Campton, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [16, 18, 21, 24, 32, 48, 64, 72, 96],
    fontWeights: {
        body: 400,
        heading: 600,
        light: 300,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 900,
    },
    lineHeights: {
        body: 1.6,
        heading: 1.125,
    },
    colors: {
        text: '#000',
        background: '#F0F0F0',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6',
    },
    images: {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999,
        },
    },
    links: {
        bold: {
            fontWeight: 'bold',
        },
        nav: {
            fontSize: 1,
            fontWeight: 'medium',
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    text: {
        default: {
            fontSize: 3,
        },
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            letterSpacing: '-0.025em',
        },
        title: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            letterSpacing: '-0.025em',
            fontSize: 4,
            py: 4,
        },
        subHeading: {
            fontSize: 4,
        },
        postTitle: {
            fontSize: 4,
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            fontSize: 2,
        },
        h1: {
            variant: 'text.heading',
            fontSize: 5,
        },
        h2: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 2,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 1,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 0,
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
    },
};
