/** @jsx jsx */
import Meta from './meta';
import Navbar from './navbar';
import { Container, jsx } from 'theme-ui'

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Container>
        <Navbar />
        <main sx={{ p: 2 }}>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
