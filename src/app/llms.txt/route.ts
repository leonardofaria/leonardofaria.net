import { llmsText } from 'src/lib/agentic';

export const dynamic = 'force-static';

export function GET() {
  return new Response(llmsText(), {
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
      'Content-Type': 'text/markdown; charset=utf-8',
      Link: '</llms.txt>; rel="self", </sitemap.xml>; rel="sitemap"; type="application/xml"',
    },
  });
}
