import { buildRssXml } from 'src/lib/rss';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(buildRssXml(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
