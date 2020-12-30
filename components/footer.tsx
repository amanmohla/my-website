import { Flex, Icon, Link } from '@chakra-ui/react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitterSquare,
    FaInstagram,
} from 'react-icons/fa';

const Footer: React.FC = () => (
    <footer>
        <Flex p={8} justify="center">
            <Link isExternal href="https://github.com/amanmohla">
                <Icon as={FaGithub} w={6} h={6} mx={4} color="teal.400" />
            </Link>
            <Link isExternal href="https://www.linkedin.com/in/amanmohla/">
                <Icon as={FaLinkedin} w={6} h={6} mx={4} color="teal.400" />
            </Link>
            <Link isExternal href="https://twitter.com/amanmohla">
                <Icon
                    as={FaTwitterSquare}
                    w={6}
                    h={6}
                    mx={4}
                    color="teal.400"
                />
            </Link>
            <Link isExternal href="https://www.instagram.com/amanmohla/">
                <Icon as={FaInstagram} w={6} h={6} mx={4} color="teal.400" />
            </Link>
        </Flex>
    </footer>
);

export default Footer;
