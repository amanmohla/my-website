import React from 'react';
import { Container } from 'theme-ui';
import Meta from './meta';
import Navbar from './navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            <Meta />
            <Container>
                <Navbar />
                <main>{children}</main>
            </Container>
        </React.Fragment>
    );
};

export default Layout;
