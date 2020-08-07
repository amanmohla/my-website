import { ReactNode, FunctionComponent } from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Home from '../components/home'

type Props = {
    children?: ReactNode
}

const Blog: FunctionComponent = ({ children }: Props) => (
    <Layout>
        <Container>
            <Navbar />
            <section className=" h-screen flex flex-col items-center justify-center">
                <h1>Page under construction</h1>
            </section>
        </Container>
    </Layout>
)

export default Blog
