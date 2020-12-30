import { Flex, Box, Heading, Text, Link, SimpleGrid } from '@chakra-ui/react';
import { Post } from '../type';

type PostItemProps = {
    post: Post;
};
const PostItem: React.FC<PostItemProps> = ({ post }: PostItemProps) => {
    const postLink = `/blog/${post.slug}`;
    return (
        <Box>
            <Link href={postLink}>
                <Heading as="h2">{post.title}</Heading>
            </Link>
            <Text>{post.excerpt}</Text>
        </Box>
    );
};

type PostListProps = {
    allPosts: Post[];
};

const PostList: React.FC<PostListProps> = ({ allPosts }: PostListProps) => (
    <Flex
        flex="1"
        direction="column"
        mx="auto"
        my={8}
        maxWidth={{ base: '760px', xl: '960px' }}
    >
        <Heading
            as="h1"
            textAlign="center"
            mt={6}
            mb={8}
            pl={4}
            letterSpacing="wide"
        >
            All Posts
        </Heading>
        <SimpleGrid columns={[2]} spacing={10}>
            {allPosts.map((post) => (
                <PostItem post={post} key={post.slug} />
            ))}
        </SimpleGrid>
    </Flex>
);

export default PostList;
