import SiteLayout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { Post } from '../type';
import { Flex, Heading } from '@chakra-ui/react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

type BlogPageProps = {
    posts: Post[];
};

const BlogPage: React.FC<BlogPageProps> = () => (
    <SiteLayout>
        <Flex direction="column" minHeight="100vh" p={12}>
            <Navbar />
            <Flex
                flex="1"
                direction="column"
                mx="auto"
                my={8}
                maxWidth={{ base: '760px', xl: '960px' }}
            >
                <Heading
                    as="h1"
                    size="lg"
                    textAlign="center"
                    mt={6}
                    mb={8}
                    pl={4}
                    letterSpacing="wide"
                >
                    Nothing here, right now!
                </Heading>
            </Flex>
            {/* <PostList allPosts={posts} /> */}
            <Footer />
        </Flex>
    </SiteLayout>
);

export default BlogPage;

export const getStaticProps = (): { props: BlogPageProps } => ({
    props: { posts: getAllPosts() },
});
