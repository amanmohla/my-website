import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Header from '../components/header'

type Props = {
  allPosts: Post[]
}

type IntroProps = {
  children: React.ReactNode;
  isBold?: boolean;
};

const IntroText = ({ children, isBold }: IntroProps) => (
  <div className={"font-serif tracking-wide leading-tight text-3xl md:text-5xl lg:text-6xl xl:text-7xl " + (isBold ? "font-semibold" : "font-normal")}>
    {children}
  </div>
)

const Index = () => {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>Aman Mohla's online home</title>
      </Head>
      <section className="h-screen flex flex-col items-center justify-center">
        <IntroText>Hello! I'm</IntroText>
        <IntroText isBold>Aman Prakash Mohla</IntroText>
        <IntroText>Full stack developer</IntroText>
      </section>
    </Layout>
  )
}

export default Index

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
