import { type Options } from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';

// div.BLOCK > pre.PRE > code.CODE
const CODE_STYLES = {
  BLOCK:
    'w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white overflow-scroll',
  TITLE:
    'max-w-3xl m-auto mb-0.5 bg-gray-100/10 px-3 py-1 font-mono text-xs text-gray-500',
  PRE: 'max-w-3xl max-h-[75vh] m-auto my-2 py-4 font-mono text-lg bg-gradient-to-b from-gray-50 to-white rounded',
  CODE: 'whitespace-pre-wrap grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3',
  INLINE_BLOCK:
    'whitespace-pre-wrap border border-[#E3EDF3] px-1.5 py-px rounded-md bg-[#F7FAFB]',
  INLINE_CODE: '',
  NUMBERED_LINES:
    '[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-gray-600 before:[&>span]:text-sm before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]',
  HIGHLIGHTED_LINE:
    '!border-l-purple-300/70 bg-purple-200/15 before:!text-gray-600',
};

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-charade-700/0 hover:before:text-charade-700 pl-[1em] -ml-[1em]`;

export const FULL_WIDTH_WRAPPER =
  'w-screen relative left-2/4 right-2/4 -ml-[50vw] -mr-[50vw]';

export const WIDE_WRAPPER =
  'max-w-[100vw] relative left-2/4 lg:max-w-4xl -translate-x-2/4';

export const CONTENT_STYLES = {
  a: 'transition duration-300 ease-in-out text-blue-600 hover:text-blue-800',
  blockquote: 'pl-5 border-l-4 border-charade-600',
  h1: 'my-2 font-semibold tracking-tighter text-charade-700 text-3xl lg:text-4xl',
  h2: 'my-2 font-semibold tracking-tighter text-charade-700 text-2xl lg:text-3xl',
  h3: 'my-2 font-semibold tracking-tighter text-charade-700 text-xl lg:text-2xl',
  h4: 'my-2 tracking-tighter text-charade-700 text-lg lg:text-xl',
  h5: 'my-2 text-lg text-charade-700',
  h6: 'my-2 font-semibold text-base uppercase text-charade-700',
  p: 'my-2 text-lg',
  ul: 'my-6 text-lg ml-1 list-inside list-disc',
  ol: 'my-6 text-lg ml-1 list-inside list-decimal',
  dl: 'my-6 text-lg',
  table: 'my-6 w-full max-f-full bg-transparent',
  td: 'p-2 align-top border-t border-charade-600',
  tr: 'p-2 align-top border-t border-charade-600',
  th: 'text-black',
  section: '',
  video: WIDE_WRAPPER,
};

// The markdown content is wrappered in an element with
// these classes. Note that I'm overriding my-2 from above
export const CONTENT_STYLES_WRAPPER =
  '[&>p]:my-6 [&>p:first-of-type]:text-xl [&>h1]:my-6 [&>h2]:my-6 [&>h3]:my-6 [&>h4]:my-6 [&>h5]:my-6 [&>h6]:my-6 [&>ul]:my-6 [&>ol]:my-6 [&>dd]:my-6 [&>table]:my-6';

const TAGS = Object.keys(CONTENT_STYLES);

// TODO: fix types
type Node = {
  tagName: keyof typeof CONTENT_STYLES;
  name: keyof typeof CONTENT_STYLES;
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
    // @ts-ignore trust me ts
    ...node.properties,
    className: CONTENT_STYLES[node.tagName],
  };

  if ('children' in node) {
    node.children = node.children.map((n) => {
      if (n.type === 'mdxJsxTextElement' && TAGS.includes(n.name)) {
        n.attributes = n.attributes.map((attribute: any) => {
          if (attribute.name === 'className') {
            attribute.value = `${CONTENT_STYLES[n.name]} ${attribute.value}`;
          }

          return attribute;
        });

        return n;
      }

      // Recursively inject classes in the markup
      if ('tagName' in n) {
        n = injectTailwindClasses(n);
      }

      return n;
    });
  }

  return node;
};

export function rehypePrettyCodeClasses() {
  // Inject right Tailwind CSS
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

    // Replace "full-width" to right Tailwind CSS classes
    visit(
      tree,
      (node: any) =>
        Boolean(
          node.type === 'mdxJsxFlowElement' &&
            node?.attributes?.some((attribute: any) => {
              return (
                attribute.name === 'className' &&
                attribute.value?.includes('full-width')
              );
            })
        ),
      (node: any) => {
        node.attributes = node.attributes.map((attribute: any) => {
          if (attribute.name === 'className') {
            attribute.value = FULL_WIDTH_WRAPPER;
          }

          return attribute;
        });

        return node;
      }
    );

    // Make images wider than text container
    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === 'p' &&
            node.children?.length === 1 &&
            node.children.some((n: any) => n.tagName === 'img')
        ),
      (node: any) => {
        node.children = node.children.map((n: any) => {
          n.properties = {
            ...n.properties,
            className: WIDE_WRAPPER,
          };

          return n;
        });

        return node;
      }
    );

    // Make videos wider than text container
    visit(
      tree,
      (node: any) =>
        Boolean(node.type === 'mdxJsxFlowElement' && node.name === 'video'),
      (node: any) => {
        node.attributes = node.attributes.map((attribute: any) => {
          if (attribute.name === 'className') {
            attribute.value = `${attribute.value} ${WIDE_WRAPPER}`;
          }

          return attribute;
        });

        return node;
      }
    );

    // Append icons to links ↗︎
    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === 'p' &&
            node.children?.length > 1 &&
            node.children.some((n: any) => n.tagName === 'a')
        ),
      (node: any) => {
        node.children = node.children.map((n: any) => {
          // TODO: Add GitHub/YouTube icons
          // if (
          //   n.tagName === 'a' &&
          //   // eslint-disable-next-line no-prototype-builtins
          //   n.properties.hasOwnProperty('href') &&
          //   n.properties.href.includes('github.com')
          // ) {
          //   n.children = n.children.map((anchorNode: any) => {
          //     return anchorNode;
          //   });
          // }

          if (
            n.tagName === 'a' &&
            // eslint-disable-next-line no-prototype-builtins
            n.properties.hasOwnProperty('href') &&
            n.properties.href.startsWith('https://') &&
            !n.properties.href.includes('https://leonardofaria.net')
          ) {
            // console.log({ n });
            n.children = n.children.map((anchorNode: any) => {
              if (anchorNode.type === 'text') {
                anchorNode.value = `${anchorNode.value} ↗︎`;
              }
              return anchorNode;
            });
          }

          return n;
        });

        return node;
      }
    );

    // Related to code highlighting
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
        textNode.properties = { className: [CODE_STYLES.INLINE_CODE] };
        textNode.children = [{ type: 'text', value: textNode.value }];
        node.properties.className = [CODE_STYLES.INLINE_BLOCK];
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
            CODE_STYLES.INLINE_BLOCK,
          ];
          node.children[0].properties.className = [
            ...(node.children[0].properties.className || []),
            CODE_STYLES.INLINE_CODE,
          ];

          return node;
        }

        if (node.tagName === 'div') {
          node.properties.className = [
            ...(node.properties.className || []),
            CODE_STYLES.BLOCK,
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
                CODE_STYLES.TITLE,
              ];
            }
            if (node.tagName === 'pre') {
              node.properties.className = [CODE_STYLES.PRE];
              if (node.children[0].tagName === 'code') {
                node.children[0].properties.className = [
                  ...(node.children[0].properties.className || []),
                  CODE_STYLES.CODE,
                ];
                if (
                  typeof node.children[0].properties['data-line-numbers'] !==
                  'undefined'
                ) {
                  node.children[0].properties.className.push(
                    CODE_STYLES.NUMBERED_LINES
                  );
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
    node.properties.className.push(CODE_STYLES.HIGHLIGHTED_LINE);
  },
};
