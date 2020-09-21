/** @jsx jsx */
import { Button, Link as TLink, Flex, Box, jsx } from 'theme-ui'
import Link from 'next/link';
import Avatar from './avatar';
import { AVATAR_URL } from '../lib/constants';

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => (
  <Button><TLink href={href} variant="nav">{text}</TLink></Button>
);

const Navbar = () => {
  return (
    <header>
      <nav>
        <Box py={3}>
          <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
            <TLink href="/" sx={{ border: 0, }}>
              <Avatar picture={AVATAR_URL} />
            </TLink>
            <Box>
              <NavLink href='/blog' text="Blog" />
              {/* <NavLink href='/about' text="About" />
                <NavLink href='/books' text="Books" /> */}
            </Box>
          </Flex>
        </Box>
      </nav >
    </header>
  );
};

export default Navbar;
