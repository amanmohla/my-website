import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Navbar from '../../components/navbar'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className="max-w-2xl mx-auto px-6">
      <main className="mt-12 mb-8">
        <article className="mb-32">
          <Head>
            <title>
              {post.title}
            </title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <h1>
            {post.title}
          </h1>
          <PostBody content={post.content} />
        </article>
      </main>
    </div>
  )
  // return (
  //   <Layout>
  //     <Container>
  //       <Navbar />
  //       {router.isFallback ? (
  //         <PostTitle>Loading…</PostTitle>
  //       ) : (
  //         <>

  //         </>
  //       )}
  //     </Container>
  //   </Layout>
  // )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
