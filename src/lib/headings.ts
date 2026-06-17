import GithubSlugger from 'github-slugger';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

export type DocumentHeading = {
  /** Heading level (1–6), matches rehype-slug output */
  heading: number;
  text: string;
  slug: string;
};

function headingText(node: { children?: Array<{ type: string; value?: string }> }) {
  if (!node.children) {
    return '';
  }

  return node.children
    .flatMap((child) => {
      if (child.type === 'text' || child.type === 'inlineCode') {
        return child.value ?? '';
      }

      if (child.type === 'link' && 'children' in child) {
        return headingText(child as { children?: Array<{ type: string; value?: string }> });
      }

      return '';
    })
    .join('');
}

export function isDocumentHeading(value: unknown): value is DocumentHeading {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const heading = value as DocumentHeading;

  return (
    typeof heading.heading === 'number' &&
    typeof heading.text === 'string' &&
    typeof heading.slug === 'string'
  );
}

export function normalizeHeadings(value: unknown): DocumentHeading[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isDocumentHeading);
}

export function extractHeadings(raw: string): DocumentHeading[] {
  const slugger = new GithubSlugger();
  const tree = remark().use(remarkParse).parse(raw);
  const headings: DocumentHeading[] = [];

  visit(tree, 'heading', (node) => {
    const text = headingText(node).trim();

    if (!text) {
      return;
    }

    headings.push({
      heading: node.depth,
      text,
      slug: slugger.slug(text),
    });
  });

  return headings;
}
