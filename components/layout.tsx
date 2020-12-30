import React from 'react';
import Meta from './meta';

type SiteLayoutProps = {
    children: React.ReactNode;
};

//This is the layout which all pages of the site would use
const SiteLayout: React.FC<SiteLayoutProps> = ({
    children,
}: SiteLayoutProps) => {
    return (
        <React.Fragment>
            <Meta />
            <div>{children}</div>
        </React.Fragment>
    );
};

export default SiteLayout;
