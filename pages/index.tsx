/** @jsx jsx */
import { Heading, Text, Box, jsx } from 'theme-ui';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import { getAllPosts } from '../lib/api';
import { Post } from '../type';

type IndexPageProps = {
    allPosts: Post[];
};

const IndexPage: React.FC<IndexPageProps> = ({ allPosts }: IndexPageProps) => {
    return (
        <Layout>
            <Heading as="h1" variant="title">
                Hi! I&#39;m Aman Prakash Mohla
            </Heading>
            <Text
                sx={{
                    fontSize: 3,
                    color: 'text',
                    fontFamily: 'body',
                    lineHeight: 'body',
                    fontWeight: 'body',
                    letterSpacing: 'body',
                }}
                m={0}
                pb={8}
            >
                Welcome to my space on internet. I am a full stack developer
                based in Sydney, Australia. I love building web applications
                using Javascript and GoLang. I currently work with Atlassian and
                have previously co-founded Tablehero.
            </Text>
            <Box mb={6}>
                <Heading as="h2" variant="subHeading">
                    Recent posts
                </Heading>
            </Box>
            <PostList allPosts={allPosts} />
        </Layout>
    );
};

export default IndexPage;

export const getStaticProps = async (): Promise<{
    props: { allPosts: Post[] };
}> => ({
    props: { allPosts: getAllPosts() },
});
