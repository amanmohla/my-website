import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { POSTS_DIRECTORY } from './constants';
import { parsePostDate } from './date-formatter';
import { Post } from '../type';

export const getPostByFileName = (filename: string): Post => {
    const slug = filename.replace('.md', '');
    const filePath = join(postsDirectory, filename);
    const fileData = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileData);
    const date = parsePostDate(data.date);
    const { title, excerpt, draft, author } = data;
    return { title, excerpt, date, draft, author, content, slug };
};

export const postsDirectory = join(process.cwd(), POSTS_DIRECTORY);
export const getPostFilePath = (filename: string): string =>
    join(postsDirectory, filename);

export const getAllPostsSlug = (): string[] =>
    fs
        .readdirSync(postsDirectory)
        .map((filename) => filename.replace('.md', ''));

export const getPostBySlug = (slug: string): Post => {
    const filename = `${slug}.md`;
    return getPostByFileName(filename);
};

export const getAllPosts = (): Post[] =>
    fs
        .readdirSync(postsDirectory)
        .map((filename) => getPostByFileName(filename))
        .filter((post) => !post.draft)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
