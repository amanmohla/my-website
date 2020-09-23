import { merge } from 'theme-ui';
import { darken, lighten } from '@theme-ui/color';

const resetSpace = {
    p: 0,
    m: 0,
};

const baseHeadingStyles = {
    fontFamily: 'body',
    lineHeight: 'heading',
    fontWeight: 'heading',
    letterSpacing: 'heading',
    color: 'text',
    ...resetSpace,
};

const baseTextStyles = {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    letterSpacing: 'body',
    color: 'text',
    fontSize: 3,
    ...resetSpace,
};

const theme = {
    space: [0, 4, 8, 12, 16, 20, 32, 48, 64, 72],
    fonts: {
        body:
            'Campton, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [14, 16, 18, 21, 26, 32, 36, 44, 64],
    fontWeights: {
        body: 400,
        medium: 500,
        heading: 600,
        bold: 700,
    },
    lineHeights: {
        body: 1.562,
        heading: 1.125,
    },
    letterSpacings: {
        body: '-0.0030em',
        heading: '-0.025em',
        relaxed: '-0.005em',
    },
    colors: {
        background: 'rgba(240, 251, 251, 1)',
        text: 'rgba(51, 51, 51, 1)',
        muted: 'rgba(51, 51, 51, 0.2)',
        primary: 'rgba(255,101,80,1)',
        secondary: 'rgba(4,66,73,1)',
    },
    borders: {
        primary: `1px solid`,
    },
    layout: {
        container: {
            maxWidth: '760px',
            minHeight: '100vh',
            margin: '0 auto',
            px: 4,
            py: 0,
        },
    },
    buttons: {
        primary: {
            fontSize: 0,
            lineHeight: 'body',
            color: 'primary',
            bg: 'background',
            border: 'primary',
            borderColor: 'primary',
            borderRadius: '4px',
            textDecoration: 'none',
            cursor: 'pointer',
            fontWeight: 'body',
            fontStyle: 'normal',
            py: 1,
            px: 4,
            '&:hover, &:focus, &:active': {
                borderColor: darken('primary', 0.15),
                color: darken('primary', 0.15),
                outline: 'none',
                textDecoration: 'none',
            },
        },
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
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'inherit',
        },
    },
    text: {
        title: {
            ...baseHeadingStyles,
            fontSize: 5,
            my: 4,
        },
        subHeading: {
            ...baseHeadingStyles,
            fontWeight: 'medium',
            fontSize: 4,
            color: lighten('text', 0.05),
            borderBottom: 'primary',
            borderColor: 'muted',
            pb: 3,
        },
        postListTitle: {
            ...baseHeadingStyles,
            fontSize: 4,
            mb: 2,
            ':hover,:focus': {
                textDecoration: 'underline',
                color: darken('text', 0.1),
            },
        },
        postListExcerpt: {
            ...baseTextStyles,
            fontSize: 2,
            color: lighten('text', 0.15),
        },
        postTitle: {
            ...baseHeadingStyles,
            fontWeight: 'bold',
            fontSize: 6,
            my: 6,
        },
    },
    styles: {
        root: {
            ...baseTextStyles,
        },
        h1: {
            ...baseHeadingStyles,
            fontSize: 5,
            pt: 7,
        },
        h2: {
            ...baseHeadingStyles,
            fontSize: 4,
            pt: 6,
        },
        h3: {
            ...baseHeadingStyles,
            fontWeight: 'medium',
            fontSize: 4,
            color: lighten('text', 0.15),
            pt: 5,
        },
        p: {
            ...baseTextStyles,
            fontSize: 3,
            py: 5,
        },
        hr: {
            ...resetSpace,
            color: lighten('text', 0.05),
            borderBottom: 'primary',
            borderColor: 'muted',
            my: 4,
        },
        strong: {
            fontWeight: 'bold',
        },
        blockquote: {
            ...resetSpace,
            mt: 4,
            fontStyle: 'italic',
            letterSpacing: 'relaxed',
            color: lighten('text', 0.05),
            borderLeft: '3px solid',
            borderColor: 'muted',
            pl: 3,
            ml: '-16px',
            // @ts-ignore
            p: { ...resetSpace },
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            bg: 'rgba(90, 90, 90, 0.15)',
            px: 2,
            py: 1,
            borderRadius: '5px',
            code: {
                fontSize: 1,
                color: 'inherit',
                bg: 'transparent',
            },
        },
        code: {
            fontSize: 1,
            fontFamily: 'monospace',
            bg: 'rgba(90, 90, 90, 0.15)',
            px: 2,
            py: 1,
            borderRadius: '5px',
        },
        a: {
            color: 'secondary',
            textDecoration: 'none',
            borderBottom: '1px solid',
            borderColor: 'secondary',
            '&:hover, &:focus, &:active': {
                borderColor: darken('secondary', 0.15),
                color: darken('secondary', 0.15),
                outline: 'none',
                textDecoration: 'none',
            },
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

export default theme;
