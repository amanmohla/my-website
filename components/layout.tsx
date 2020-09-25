/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import Meta from './meta';
import Navbar from './navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <>
            <Meta />
            <Container>
                <Navbar />
                <main>{children}</main>
            </Container>
        </>
    );
};

export default Layout;
