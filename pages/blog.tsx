/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { Post } from '../type'
import PostList from '../components/post-list'

type BlogPageProps = {
    posts: Post[];
}

const BlogPage = ({ posts }: BlogPageProps) => (
    <Layout>
        <section>
            <PostList allPosts={posts} />
        </section>
    </Layout>
)

export default BlogPage


export const getStaticProps = () => ({
    props: { posts: getAllPosts() },
});