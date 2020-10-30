import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { Post } from '../type';
import PostList from '../components/post-list';

type BlogPageProps = {
    posts: Post[];
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }: BlogPageProps) => (
    <Layout>
        <section>
            <PostList allPosts={posts} />
        </section>
    </Layout>
);

export default BlogPage;

export const getStaticProps = (): { props: BlogPageProps } => ({
    props: { posts: getAllPosts() },
});
