import { Box } from '@chakra-ui/react';

type PostBodyProps = {
    content: string;
};

const PostBody: React.FC<PostBodyProps> = () => {
    return <Box>{/* <ReactMarkdown source={content} /> */}</Box>;
};

export default PostBody;
