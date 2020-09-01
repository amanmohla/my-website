import remark from 'remark';
import remark2rehype from 'remark-rehype';
import doc from 'rehype-document';
import stringify from 'rehype-stringify';
import shiki from 'rehype-shiki';

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        .data('settings', { fragment: true })
        .use(remark2rehype)
        .use(doc)
        .use(stringify, {
            quoteSmart: true,
            closeSelfClosing: true,
            omitOptionalTags: true,
            entities: { useShortestReferences: true },
        })
        .use(shiki, {
            theme: 'solarized_light',
        })
        .process(markdown);
    return result.toString();
}
