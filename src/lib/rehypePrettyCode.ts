import { type Options } from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';

// div.BLOCK > pre.PRE > code.CODE
const BLOCK =
  'w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white';
const TITLE =
  'max-w-3xl m-auto mb-0.5 rounded-md bg-gray-100/10 px-3 py-1 font-mono text-xs text-gray-300 shadow-sm';
const PRE =
  'max-w-3xl m-auto my-2 px-5 py-4 font-mono text-lg bg-white rounded';
const CODE =
  'whitespace-pre-wrap grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3';
const INLINE_BLOCK =
  'whitespace-pre-wrap border border-[#E3EDF3] px-1.5 py-px rounded-md bg-[#F7FAFB]';
const INLINE_CODE = '';
const NUMBERED_LINES =
  '[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-gray-600 before:[&>span]:text-sm before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]';
const HIGHLIGHTED_LINE =
  '!border-l-rose-300/70 bg-rose-200/10 before:!text-white/70';

const STYLES = {
  a: 'transition duration-300 ease-in-out hover:text-blue-600 underline',
  blockquote: 'pl-5 border-l-4 border-gray-600',
  h1: 'my-6 font-semibold tracking-tighter text-gray-700 text-4xl',
  h2: 'my-6 font-semibold tracking-tighter text-gray-700 text-3xl',
  h3: 'my-6 font-semibold tracking-tighter text-gray-700 text-2xl',
  h4: 'my-6 tracking-tighter text-gray-700 text-xl',
  h5: 'my-6 text-lg text-gray-700',
  h6: 'my-6 font-semibold text-base uppercase text-gray-700',
  p: 'my-6 text-lg',
  ul: 'my-6 text-lg',
  ol: 'my-6 text-lg',
  dl: 'my-6 text-lg',
  table: 'my-6 w-full max-f-full bg-transparent',
  td: 'p-2 align-top border-t border-gray-600',
  tr: 'p-2 align-top border-t border-gray-600',
  th: 'text-black',
  kbd: INLINE_BLOCK,
};

const TAGS = Object.keys(STYLES);

// TODO: fix types
type Node = {
  tagName: keyof typeof STYLES;
  name: keyof typeof STYLES;
  attributes: {
    type: string;
    name: string;
    value: string;
  }[];
  type: string;
  children: Node[];
  [key: string]: unknown;
};

const injectTailwindClasses = (node: Node) => {
  node.properties = {
    className: STYLES[node.tagName],
  };

  if ('children' in node) {
    node.children = node.children.map((n) => {
      if (n.type === 'mdxJsxTextElement' && TAGS.includes(n.name)) {
        n.attributes = n.attributes.map((attribute: any) => {
          if (attribute.name === 'className') {
            attribute.value = `${STYLES[n.name]} ${attribute.value}`;
          }

          return attribute;
        });

        return n;
      }

      if ('tagName' in n) {
        n = injectTailwindClasses(n);
      }

      return n;
    });
  }

  return node;
};

export function rehypePrettyCodeClasses() {
  return (tree: any) => {
    visit(
      tree,
      (node: any) =>
        Boolean(
          TAGS.includes(node.tagName) &&
            Object.keys(node.properties).length === 0 &&
            node.children.some((n: any) => n.type === 'text')
        ),
      (node: any) => {
        injectTailwindClasses(node);
      }
    );

    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === 'code' &&
            Object.keys(node.properties).length === 0 &&
            node.children.some((n: any) => n.type === 'text')
        ),
      (node: any) => {
        const textNode = node.children.find((n: any) => n.type === 'text');
        textNode.type = 'element';
        textNode.tagName = 'code';
        textNode.properties = { className: [INLINE_CODE] };
        textNode.children = [{ type: 'text', value: textNode.value }];
        node.properties.className = [INLINE_BLOCK];
        node.tagName = 'span';
      }
    );

    visit(
      tree,
      (node: any) =>
        Boolean(
          typeof node?.properties?.['data-rehype-pretty-code-fragment'] !==
            'undefined'
        ),
      (node: any) => {
        if (node.tagName === 'span') {
          node.properties.className = [
            ...(node.properties.className || []),
            INLINE_BLOCK,
          ];
          node.children[0].properties.className = [
            ...(node.children[0].properties.className || []),
            INLINE_CODE,
          ];

          return node;
        }

        if (node.tagName === 'div') {
          node.properties.className = [
            ...(node.properties.className || []),
            BLOCK,
          ];
          // eslint-disable-next-line no-shadow
          node.children = node.children.map((node: any) => {
            if (
              node.tagName === 'div' &&
              typeof node.properties?.['data-rehype-pretty-code-title'] !==
                'undefined'
            ) {
              node.properties.className = [
                ...(node.properties.className || []),
                TITLE,
              ];
            }
            if (node.tagName === 'pre') {
              node.properties.className = [PRE];
              if (node.children[0].tagName === 'code') {
                node.children[0].properties.className = [
                  ...(node.children[0].properties.className || []),
                  CODE,
                ];
                if (
                  typeof node.children[0].properties['data-line-numbers'] !==
                  'undefined'
                ) {
                  node.children[0].properties.className.push(NUMBERED_LINES);
                }
              }
            }

            return node;
          });

          return node;
        }

        return node;
      }
    );
  };
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-light',
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
    node.properties.className = [''];
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push(HIGHLIGHTED_LINE);
  },
};
