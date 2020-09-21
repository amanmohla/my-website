export type PostMeta = {
    title: string;
    excerpt: string;
    date: string;
    draft: boolean;
    author: string;
    slug: string;
};
export type Post = PostMeta & {
    content: string;
};
