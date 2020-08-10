import Container from '../components/container'
import Layout from '../components/layout'
import Post from '../types/post'
import Navbar from '../components/navbar'
import Home from '../components/home'

type Props = {
  allPosts: Post[]
}



const Index = () => {
  return (
    <Layout>
      <Container isFullScreen={true}>
        <Navbar/>
        <Home/>
      </Container>
    </Layout>
  )
}

export default Index