import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

type PostBodyProps = {
    content: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content }: PostBodyProps) => {
    return (
        <Box>
            <ReactMarkdown source={content} />
        </Box>
    );
};

export default PostBody;
