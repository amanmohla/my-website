type SocialIconName = 'facebook' | 'twitter' | 'email' | 'github' | 'linkedIn';
type IconProps = {
    iconSize?: number;
    iconFill?: string;
};
export type SocialIconProps = IconProps & {
    iconName: SocialIconName;
};

const FacebookIcon: React.FC<IconProps> = ({ iconFill }: IconProps) => (
    <svg
        fill={iconFill}
        id="facebook"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        enableBackground="new 0 0 24 24"
    >
        <path d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2v-2.05c0-2.164,1.212-3.684,3.766-3.684 l1.803,0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z" />
    </svg>
);

const GithubIcon: React.FC<IconProps> = ({ iconFill }: IconProps) => (
    <svg
        fill={iconFill}
        id="github"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
    >
        <path d="M13.18,11.309c-0.718,0-1.3,0.807-1.3,1.799c0,0.994,0.582,1.801,1.3,1.801s1.3-0.807,1.3-1.801 C14.479,12.116,13.898,11.309,13.18,11.309z M17.706,6.626c0.149-0.365,0.155-2.439-0.635-4.426c0,0-1.811,0.199-4.551,2.08 c-0.575-0.16-1.548-0.238-2.519-0.238c-0.973,0-1.945,0.078-2.52,0.238C4.74,2.399,2.929,2.2,2.929,2.2 C2.14,4.187,2.148,6.261,2.295,6.626C1.367,7.634,0.8,8.845,0.8,10.497c0,7.186,5.963,7.301,7.467,7.301 c0.342,0,1.018,0.002,1.734,0.002c0.715,0,1.392-0.002,1.732-0.002c1.506,0,7.467-0.115,7.467-7.301 C19.2,8.845,18.634,7.634,17.706,6.626z M10.028,16.915H9.972c-3.771,0-6.709-0.449-6.709-4.115c0-0.879,0.31-1.693,1.047-2.369 C5.537,9.304,7.615,9.9,9.972,9.9c0.01,0,0.02,0,0.029,0c0.01,0,0.018,0,0.027,0c2.357,0,4.436-0.596,5.664,0.531 c0.735,0.676,1.045,1.49,1.045,2.369C16.737,16.466,13.8,16.915,10.028,16.915z M6.821,11.309c-0.718,0-1.3,0.807-1.3,1.799 c0,0.994,0.582,1.801,1.3,1.801c0.719,0,1.301-0.807,1.301-1.801C8.122,12.116,7.54,11.309,6.821,11.309z" />
    </svg>
);

const LinkedInIcon: React.FC<IconProps> = ({ iconFill }: IconProps) => (
    <svg
        fill={iconFill}
        id="linkedIn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        enableBackground="new 0 0 24 24"
    >
        <path d="M1,6h4v13H1V6z M3,1C1.8,1,1,2,1,3.1C1,4.1,1.8,5,3,5c1.3,0,2-0.9,2-2C5,1.9,4.2,1,3,1z M14.6,6.2 c-2.1,0-3.3,1.2-3.8,2h-0.1l-0.2-1.7H6.9C6.9,7.6,7,8.9,7,10.4V19h4v-7.1c0-0.4,0-0.7,0.1-1c0.3-0.7,0.8-1.6,1.9-1.6 c1.4,0,2,1.2,2,2.8V19h4v-7.4C19,7.9,17.1,6.2,14.6,6.2z" />
    </svg>
);

const TwitterIcon: React.FC<IconProps> = ({ iconFill }: IconProps) => (
    <svg
        fill={iconFill}
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        enableBackground="new 0 0 24 24"
    >
        <path d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742 c-2.133,0-4.116-0.625-5.787-1.697c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615 c-1.651-0.031-3.046-1.121-3.526-2.621c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131 C2.84,11.183,1.539,9.658,1.539,7.828c0-0.016,0-0.031,0-0.047c0.509,0.283,1.092,0.453,1.71,0.473 c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898C3.942,5.498,6.725,7,9.862,7.158 C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773c1.086,0,2.067,0.457,2.756,1.191 c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088c0.764-0.092,1.49-0.293,2.168-0.594 C18.694,5.051,18.054,5.715,17.316,6.246z" />
    </svg>
);

const MailIcon: React.FC<IconProps> = ({ iconFill }: IconProps) => (
    <svg
        fill={iconFill}
        id="email"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        enableBackground="new 0 0 24 24"
    >
        <path d="M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514 c0.328,0,0.654-0.064,0.906-0.199s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z M18.613,7.489c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488 C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z" />
    </svg>
);

const SocialIcon: React.FC<SocialIconProps> = ({
    iconName,
    ...iconProps
}: SocialIconProps) => {
    switch (iconName) {
        case 'facebook':
            return <FacebookIcon {...iconProps} />;
            break;
        case 'twitter':
            return <TwitterIcon {...iconProps} />;
            break;
        case 'email':
            return <MailIcon {...iconProps} />;
            break;
        case 'github':
            return <GithubIcon {...iconProps} />;
            break;
        case 'linkedIn':
            return <LinkedInIcon {...iconProps} />;
            break;
    }
};

export default SocialIcon;
