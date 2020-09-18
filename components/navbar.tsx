/** @jsx jsx */
import { Link as TLink, Flex, Box, jsx } from 'theme-ui'
import Link from 'next/link';
import Avatar from './avatar';
import { AVATAR_URL } from '../lib/constants';

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => (
  <TLink px={2} href={href}>{text}</TLink>
);

const Navbar = () => {
  return (
    <nav>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box p={2}>
          <Link as={`/`} href="/">
            <a className="px-8">
              <Avatar picture={AVATAR_URL} />
            </a>
          </Link>
        </Box>
        <Box p={2}>
          <div>
            <NavLink href='/about' text="About" />
            <NavLink href='/posts' text="Posts" />
            <NavLink href='/books' text="Books" />
          </div>
        </Box>
      </Flex>
    </nav >

  );
};

export default Navbar;
