import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

type ExcerptDocument = {
  description?: string;
  content: string;
};

const format = async (content: string) => {
  const stripped = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  return stripped.toString();
};

export const generateExcerpt = async (doc: ExcerptDocument) => {
  if (doc.description) {
    return `<p>${doc.description}</p>`;
  }

  const content = doc.content;

  // I used to add a <!-- Read more --> in some posts
  // which is a WP thing to create an excerpt
  // In this migration, I replaced
  // <!-- Read more --> to <span className="hidden">more</span>
  const readMore = '<span className="hidden">more</span>';
  if (content.includes(readMore)) {
    const parsedContent = content.split(readMore);

    // If the post doesn't have a more node, going to create
    // the content dynamically
    return format(parsedContent[0]);
  }

  // If the post doesn't have a more node, going to create
  // the content dynamically
  const stripped = await format(content.replace(/(<([^>]+)>)/gi, ''));
  return `${stripped.split('</p>')[0]}</p>`;
};
