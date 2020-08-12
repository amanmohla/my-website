import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl font-bold leading-tight md:leading-snug my-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
