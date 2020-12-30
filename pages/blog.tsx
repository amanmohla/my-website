import SiteLayout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { Post } from '../type';
import PostList from '../components/post-list';
import { Flex } from '@chakra-ui/react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

type BlogPageProps = {
    posts: Post[];
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }: BlogPageProps) => (
    <SiteLayout>
        <Flex direction="column" minHeight="100vh" p={12}>
            <Navbar />
            <PostList allPosts={posts} />
            <Footer />
        </Flex>
    </SiteLayout>
);

export default BlogPage;

export const getStaticProps = (): { props: BlogPageProps } => ({
    props: { posts: getAllPosts() },
});
