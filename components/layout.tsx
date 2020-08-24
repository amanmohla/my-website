import Meta from './meta';
import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="max-w-3xl mx-auto px-4 h-full">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
      <footer>Some footer text here</footer>
    </>
  );
};

export default Layout;
