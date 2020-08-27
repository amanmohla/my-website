import { ReactNode, FunctionComponent } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Home from '../components/home'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import PostList from '../components/post-list'

type Props = {
    allPosts: Post[]
}

const Blog = ({ allPosts }: Props) => {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return <Layout>
        <Container>
            <Navbar />
            <PostList allPosts={allPosts}></PostList>
        </Container>
    </Layout>
}

export default Blog

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}