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
import DateFormatter from './date-formater'

type Props = {
    allPosts: Post[]
}

type PostItemProps = {
    post: Post
}


const PostItem = ({ post }: PostItemProps) => (
    <div className="pb-24">
        <DateFormatter dateString={post.date} />
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="text-xl py-2 leading-normal">{post.excerpt}</div>
        <Link as={`/blog/${post.slug}`} href="/blog/[post.slug]">
            <a className="hover:underline text-base font-bold text-red-600 uppercase">Read</a>
        </Link>
    </div>
)

const PostList = ({ allPosts }: Props) => {
    return <div className="pt-16">
        {allPosts.map((post, i) => (
            <PostItem key={i} post={post}/>
        ))}
    </div>
}

export default PostList