import { homepageMarkdown } from 'src/lib/agentic';

export const dynamic = 'force-static';

export function GET() {
  return new Response(homepageMarkdown(), {
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
      'Content-Type': 'text/markdown; charset=utf-8',
      Link: '</>; rel="alternate"; type="text/html", </llms.txt>; rel="describedby"',
      Vary: 'Accept, Accept-Encoding',
    },
  });
}
