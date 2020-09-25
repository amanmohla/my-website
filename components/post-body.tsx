/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import ReactMarkdown from 'react-markdown';

type PostBodyProps = {
    content: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content }: PostBodyProps) => {
    return (
        <Box sx={{ variant: 'styles' }}>
            <ReactMarkdown source={content} />
        </Box>
    );
};

export default PostBody;
