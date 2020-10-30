/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, Heading, Text, Link, jsx } from 'theme-ui';
import { Post } from '../type';

type PostItemProps = {
    post: Post;
};
const PostItem: React.FC<PostItemProps> = ({ post }: PostItemProps) => {
    const postLink = `/blog/${post.slug}`;
    return (
        <Box>
            <Link href={postLink}>
                <Heading as="h2" variant="postListTitle">
                    {post.title}
                </Heading>
            </Link>
            <Text variant="postListExcerpt">{post.excerpt}</Text>
        </Box>
    );
};

type PostListProps = {
    allPosts: Post[];
};

const PostList: React.FC<PostListProps> = ({ allPosts }: PostListProps) => (
    <ul
        sx={{
            display: 'flex',
            flexFlow: 'column wrap',
            listStyle: 'none',
            m: 0,
            p: 0,
        }}
    >
        {allPosts.map((post) => (
            <li key={post.slug} sx={{ mb: 6, mt: 4 }}>
                <PostItem post={post} />
            </li>
        ))}
    </ul>
);

export default PostList;
