/** @jsx jsx */
import { Heading, Text, jsx, Styled } from 'theme-ui'
import { ReactNode, FunctionComponent } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import { Post } from '../type'

const PostItem = ({ post }: { post: Post }) => (
    <div className="pb-24">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="text-xl py-2 leading-normal">{post.excerpt}</div>
        <Link as={`/blog/${post.slug}`} href="/blog/[post.slug]">
            <a className="hover:underline text-base font-bold text-red-600 uppercase">Read</a>
        </Link>
    </div>
)

const PostList = ({ allPosts }: { allPosts: Post[] }) => (<div>
    <Heading as='h2' py={3}>Recent posts</Heading>
    <ul
        sx={{
            listStyle: 'none',
            m: 0,
            px: 0,
            py: 4,
        }}>
        {allPosts.map(post => (
            <li key={post.slug}
                sx={{
                    mb: 5,
                }}>
                <Heading as='h2'
                    sx={{
                        m: 0,
                    }}>
                    <a href={`/posts/${post.slug}`}
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            ':hover,:focus': {
                                color: 'primary',
                                textDecoration: 'underline',
                            }
                        }}>
                        {post.title}
                    </a>
                </Heading>
                <small sx={{ fontWeight: 'bold' }}>28 Jan, 2020</small>
                <Styled.p>
                    {post.excerpt}
                </Styled.p>
            </li>
        ))}
    </ul>
</div>)

export default PostList