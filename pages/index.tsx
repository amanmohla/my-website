import { Heading, Text, Flex, Container } from '@chakra-ui/react';
import SiteLayout from '../components/layout';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const IndexPage: React.FC<any> = () => {
    return (
        <SiteLayout>
            <Flex direction="column" minHeight="100vh" p={12}>
                <Navbar />
                <Flex
                    flex="1"
                    direction="column"
                    justify="center"
                    mx="auto"
                    my={16}
                    maxWidth={{ base: '760px', lg: '960px', xl: '1140px' }}
                >
                    <Text fontSize="4xl" pl={4}>
                        👋
                    </Text>
                    <Heading as="h1" size="4xl" mt={6} mb={8} pl={4}>
                        Aman Prakash Mohla
                    </Heading>
                    <Container fontSize="2xl" color="gray.400" mx={0}>
                        Software developer 👨🏽‍💻 living in Sydney, Australia 🇦🇺. I
                        am currently working with Atlassian as a Senior
                        developer. I love to build things for the web 😺. When I
                        am not writing code I am out running on trails 🏃‍♂️ or
                        riding my bike up the hills 🚵‍♂️.
                    </Container>
                </Flex>
                <Footer />
            </Flex>
        </SiteLayout>
    );
};

export default IndexPage;

// export const getStaticProps = async (): Promise<{
//     props: { allPosts: Post[] };
// }> => ({
//     props: { allPosts: getAllPosts() },
// });
