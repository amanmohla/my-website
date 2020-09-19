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
  <TLink pl={4} href={href} variant="nav">{text}</TLink>
);

const Navbar = () => {
  return (
    <header>
      <nav>
        <Box py={4}>
          <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Link as={`/`} href="/">
                <a>
                  <Avatar picture={AVATAR_URL} />
                </a>
              </Link>
            </Box>
            <Box>
              <div>
                <NavLink href='/about' text="About" />
                <NavLink href='/posts' text="Posts" />
                <NavLink href='/books' text="Books" />
              </div>
            </Box>
          </Flex>
        </Box>
      </nav >
    </header>
  );
};

export default Navbar;
