/** @jsx jsx */
import { Heading, Text, jsx } from 'theme-ui'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { getAllPosts } from '../lib/api'
import { FunctionComponent, ReactNode } from 'react'
import { Post } from '../type'

type IndexPageProps = {
  children?: ReactNode;
  allPosts: Post[];
}

const IndexPage: FunctionComponent = (props: IndexPageProps) => {
  return (
    <Layout>
      <Heading as='h1' variant='title'>Hi! I'm Aman Prakash Mohla</Heading>
      <Text sx={{ fontSize: 2 }} pb={6}>
        Welcome to my space on internet where I post about all the ideas running in my head.
        I am a full stack developer based in Sydney, Australia.
        I love building web applications using Javascript and GoLang.
        I currently work with Atlassian and have previously co-founded Tablehero.
      </Text>
      <PostList allPosts={props.allPosts} />
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async () => ({
  props: { allPosts: getAllPosts() },
});