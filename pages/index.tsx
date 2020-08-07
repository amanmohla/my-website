import Container from '../components/container'
import Layout from '../components/layout'
import Post from '../types/post'
import Navbar from '../components/navbar'
import Home from '../components/home'

type Props = {
  allPosts: Post[]
}



const Index = () => {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Container>
        <Navbar/>
        <Home/>
      </Container>
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
