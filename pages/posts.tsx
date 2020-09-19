/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { Post } from '../type'
import PostList from '../components/post-list'

type PostsPageProps = {
    posts: Post[];
}

const Posts = ({ posts }: PostsPageProps) => (
    <Layout>
        <section>
            <PostList allPosts={posts} />
        </section>
    </Layout>
)

export default Posts


export const getStaticProps = () => ({
    props: { posts: getAllPosts() },
});