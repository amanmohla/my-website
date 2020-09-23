/** @jsx jsx */
import { Flex, Box, Heading, Text, Link, jsx, } from 'theme-ui'
import { ReactNode, FunctionComponent } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { getAllPosts } from '../lib/api'
import { Post } from '../type'

const PostItem = ({ post }: { post: Post }) => {
    const postLink = `/blog/${post.slug}`;
    return (
        <Box>
            <Link href={postLink}>
                <Heading as='h2' variant='postListTitle'>{post.title}</Heading>
            </Link>
            <Text variant='postListExcerpt'>{post.excerpt}</Text>
        </Box >
    );
}

const PostList = ({ allPosts }: { allPosts: Post[] }) => (
    <ul sx={{ display: 'flex', flexFlow: 'column wrap', listStyle: 'none', m: 0, p: 0 }}>
        {allPosts.map(post => (
            <li key={post.slug}>
                <PostItem post={post} />
            </li>
        ))}
    </ul>
)

export default PostList