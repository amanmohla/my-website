import { ReactNode, FunctionComponent } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Home from '../components/home'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Link from 'next/link'

type Props = {
    allPosts: Post[]
}

type PostItemProps = {
    post: Post
}


const PostItem = ({ post }: PostItemProps) => (
    <div>
        <div>{post.date}</div>
        <div>{post.title}</div>
        <div>{post.excerpt}</div>
        <Link as={`/blog/${post.slug}`} href="/blog/[post.slug]">
            <a className="hover:underline pl-8">Read</a>
        </Link>
    </div>
)

const PostList = ({ allPosts }: Props) => {
    return <div>
        {allPosts.map((post, i) => (
            <PostItem key={i} post={post}/>
        ))}
    </div>
}

export default PostList