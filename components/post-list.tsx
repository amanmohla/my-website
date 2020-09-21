/** @jsx jsx */
import { Flex, Box, Heading, Text, jsx, Styled } from 'theme-ui'
import { ReactNode, FunctionComponent } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import { Post } from '../type'

const PostItem = ({ post }: { post: Post }) => (
    <Box sx={{ flex: '1 1 auto' }}>
        <h1>{post.title}</h1>
        <div>{post.excerpt}</div>
        <Link as={`/blog/${post.slug}`} href="/blog/[post.slug]">
            <a>Read</a>
        </Link>
    </Box>
)

const PostList = ({ allPosts }: { allPosts: Post[] }) => (
    <Flex pt={4} sx={{ flexFlow: 'column wrap' }}>
        <Box>
            <Heading as='h2' variant="subHeading">Recent posts</Heading>
        </Box>
        <ul sx={{ listStyle: 'none', m: 0, px: 0, py: 4, display: 'flex', flexFlow: 'column wrap' }}>
            {allPosts.map(post => (
                <li key={post.slug} sx={{ mb: 4 }}>
                    <a href={`/blog/${post.slug}`} sx={{ textDecoration: 'none' }}>
                        <Heading as='h2' sx={{
                            fontSize: 3, color: 'text', lineHeight: 'heading', fontWeight: 'medium', mb: 2, letterSpacing: '-0.025em',
                            ':hover,:focus': {
                                textDecoration: 'underline',
                                color: 'rgb(0,0,0)',
                            }
                        }}>
                            {post.title}
                        </Heading>
                    </a>
                    <Text sx={{ fontSize: 1, color: 'darkerGray' }}>
                        {post.excerpt}
                    </Text>
                </li>
            ))}
        </ul>
    </Flex >)

export default PostList