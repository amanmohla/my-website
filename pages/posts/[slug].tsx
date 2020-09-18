import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post-body';
import { getPostBySlug, getAllPostsSlug } from '../../lib/api';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Post } from '../../type';
import Layout from '../../components/layout';

type PostPageProps = {
  children?: ReactNode;
  post: Post;
};

const PostPage = (props: PostPageProps) => {
  const router = useRouter();
  if (!router.isFallback && !props.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <main className="block mt-12 mb-8">
        <article className="block mb-32">
          <Head>
            <title>{props.post.title}</title>
          </Head>
          <h1>{props.post.title}</h1>
          <PostBody content={props.post.content} />
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

export const getStaticProps = async ({ params }: Params) => ({
  props: {
    post: getPostBySlug(params.slug)
  },
});

export const getStaticPaths = async () => ({
  paths: getAllPostsSlug().map(slug => ({
    params: { slug }
  })),
  fallback: false
});