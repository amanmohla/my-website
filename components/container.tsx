import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  isFullScreen?: boolean
}

const Container = ({ children, isFullScreen = false }: Props) => {
  const className = `max-w-3xl mx-auto flex flex-col ${isFullScreen ? 'h-screen' : ''}`
  return <div className={className}>
    {children}
  </div>
}

export default Container
