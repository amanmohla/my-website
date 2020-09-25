/** @jsx jsx */
import { Button, Link as TLink, Flex, Box, jsx } from 'theme-ui';
import Avatar from './avatar';
import { AVATAR_URL } from '../lib/constants';

type NavLinkProps = {
    href: string;
    text: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, text }: NavLinkProps) => (
    <Button variant="primary">
        <TLink href={href} variant="nav">
            {text}
        </TLink>
    </Button>
);

const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                <Flex
                    py={6}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}
                >
                    <TLink href="/" sx={{ border: 0 }}>
                        <Avatar picture={AVATAR_URL} />
                    </TLink>
                    <Box>
                        <NavLink href="/blog" text="Blog" />
                    </Box>
                </Flex>
            </nav>
        </header>
    );
};

export default Navbar;
