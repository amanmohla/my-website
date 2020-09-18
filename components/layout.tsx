/** @jsx jsx */
import Meta from './meta';
import Navbar from './navbar';
import { Box, jsx } from 'theme-ui'

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Box sx={{
        maxWidth: '760px',
        mx: 'auto',
        minHeight: '100vh',
        pb: 5
      }}>
        <header>
          <Navbar></Navbar>
        </header>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
