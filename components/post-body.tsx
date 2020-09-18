import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="my-4">
      <ReactMarkdown source={content} />
    </div>
  )
}

export default PostBody
