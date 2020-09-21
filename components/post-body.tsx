/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <Box sx={{ variant: 'styles' }}>
      <ReactMarkdown source={content} />
    </Box >
  )
}

export default PostBody
