import { PRIVACY_PARAGRAPHS, notFoundMarkdown } from 'src/lib/agentic';
import { BASE_URL } from 'src/lib/constants';
import { allMicroposts, allPages, allPosts } from 'src/lib/content';

const STATIC_PAGE_SUMMARIES: Record<string, { title: string; summary: string }> =
  {
    '/about/resume': {
      title: 'Leonardo Faria’s résumé',
      summary:
        'Professional experience, education, patent, speaking, volunteering, and open-source work. Visit the HTML page for the complete structured résumé or download the linked PDF.',
    },
    '/mac/collection': {
      title: 'Mac collection',
      summary:
        'A visual catalog of vintage Apple computers in Leonardo Faria’s collection.',
    },
    '/playground': {
      title: 'Playground',
      summary:
        'Interactive code and interface experiments. Visit the HTML page to run them.',
    },
  };

function documentMarkdown(pathname: string) {
  const page = allPages.find(
    (candidate) =>
      candidate.permalink === pathname ||
      candidate.permalink === `${pathname}/`,
  );
  if (page) {
    return `# ${page.title}\n\n${page.description}\n\n${page.content}\n`;
  }

  const post = allPosts.find(
    (candidate) => candidate.permalink.replace(/\/$/, '') === pathname,
  );
  if (post) {
    return `# ${post.title}\n\nPublished: ${post.publishedAt}\n\n${post.content}\n`;
  }

  const micropost = allMicroposts.find(
    (candidate) => candidate.permalink === pathname,
  );
  if (micropost) {
    return `# ${micropost.title}\n\nPublished: ${micropost.publishedAt}\n\n${micropost.content}\n`;
  }

  return null;
}

function listingMarkdown(pathname: string) {
  if (pathname === '/archives') {
    const links = [...allPosts]
      .sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
      )
      .map(
        (post) =>
          `- [${post.title}](${BASE_URL}${post.permalink}): ${post.publishedAt.slice(0, 10)}`,
      )
      .join('\n');

    return `# Article archives\n\n${links}\n`;
  }

  if (pathname === '/microblog') {
    const links = [...allMicroposts]
      .sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
      )
      .map(
        (post) =>
          `- [${post.title}](${BASE_URL}${post.permalink}): ${post.publishedAt.slice(0, 10)}`,
      )
      .join('\n');

    return `# Microblog\n\n${links}\n`;
  }

  if (pathname.startsWith('/tags/')) {
    const tag = decodeURIComponent(pathname.slice('/tags/'.length));
    const links = [...allPosts, ...allMicroposts]
      .filter((document) => document.tags?.includes(tag))
      .map(
        (document) =>
          `- [${document.title}](${BASE_URL}${document.permalink})`,
      )
      .join('\n');

    return links ? `# Posts tagged “${tag}”\n\n${links}\n` : null;
  }

  return null;
}

function markdownForPath(pathname: string) {
  if (pathname === '/privacy') {
    return `# Privacy\n\n${PRIVACY_PARAGRAPHS.join('\n\n')}\n`;
  }

  const staticPage = STATIC_PAGE_SUMMARIES[pathname];
  if (staticPage) {
    return `# ${staticPage.title}\n\n${staticPage.summary}\n\n[Open the HTML page](${BASE_URL}${pathname}).\n`;
  }

  return documentMarkdown(pathname) ?? listingMarkdown(pathname);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug = [] } = await params;
  const pathname = `/${slug.join('/')}`;
  const markdown = markdownForPath(pathname);

  return new Response(markdown ?? notFoundMarkdown(pathname), {
    status: markdown ? 200 : 404,
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
      'Content-Type': 'text/markdown; charset=utf-8',
      Link: `<${pathname}>; rel="alternate"; type="text/html", </llms.txt>; rel="describedby"`,
      Vary: 'Accept, Accept-Encoding',
    },
  });
}
