/** @jsx jsx */
import { Heading, jsx } from 'theme-ui'
import { ReactNode, FunctionComponent } from 'react'
import Layout from '../components/layout'

type Props = {
  children?: ReactNode
}

const Books: FunctionComponent = ({ children }: Props) => (
  <Layout>
    <section>
      <Heading>Page under construction</Heading>
    </section>
  </Layout>
)

export default Books
