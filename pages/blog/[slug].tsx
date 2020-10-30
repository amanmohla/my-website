import { Heading } from 'theme-ui';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import PostBody from '../../components/post-body';
import { getPostBySlug, getAllPostsSlug } from '../../lib/api';
import { Post } from '../../type';
import Layout from '../../components/layout';

type PostPageProps = {
    post: Post;
};

const PostPage: React.FC<PostPageProps> = ({ post }: PostPageProps) => {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout>
            <main sx={{ pb: 5 }}>
                <article>
                    <Head>
                        <title>{post.title}</title>
                    </Head>
                    <Heading as="h1" variant="postTitle">
                        {post.title}
                    </Heading>
                    <PostBody content={post.content} />
                </article>
            </main>
        </Layout>
    );
};

export default PostPage;

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps = async ({
    params,
}: Params): Promise<{ props: PostPageProps }> => ({
    props: {
        post: getPostBySlug(params.slug),
    },
});

export const getStaticPaths = async (): Promise<{
    paths: { params: { slug: string } }[];
    fallback: boolean;
}> => ({
    paths: getAllPostsSlug().map((slug) => ({
        params: { slug },
    })),
    fallback: false,
});
