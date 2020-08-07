import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => (
  <div className="container mx-auto h-screen flex flex-col">
    {children}
  </div>
)

export default Container
