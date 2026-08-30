import { type NextRequest, NextResponse } from 'next/server';
import { negotiateRepresentation } from 'src/lib/agentic';

const DISCOVERY_LINKS =
  '</index.md>; rel="alternate"; type="text/markdown", </llms.txt>; rel="describedby", </sitemap.xml>; rel="sitemap"; type="application/xml"';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/world-globe.svg' || pathname === '/world-map.svg') {
    const url = request.nextUrl.clone();

    // Geo is no longer available in Next.js 16, so preserve the existing
    // location defaults used by the generated world visualizations.
    url.searchParams.set('country', 'US');
    url.searchParams.set('city', 'San Francisco');
    url.searchParams.set('latitude', '37.7749');
    url.searchParams.set('longitude', '-122.4194');

    return NextResponse.rewrite(url);
  }

  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname === '/agent-markdown' ||
    pathname.startsWith('/agent-markdown/') ||
    /\/[^/]+\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (
    request.headers.has('rsc') ||
    request.headers.has('next-router-state-tree')
  ) {
    return NextResponse.next();
  }

  const representation = negotiateRepresentation(request.headers.get('accept'));

  if (representation === 'not-acceptable') {
    return new NextResponse(
      '406 Not Acceptable\n\nAvailable representations: text/html, text/markdown\n',
      {
        status: 406,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          Link: DISCOVERY_LINKS,
          Vary: 'Accept, Accept-Encoding',
        },
      },
    );
  }

  if (representation === 'markdown') {
    const markdownUrl = request.nextUrl.clone();
    markdownUrl.pathname =
      pathname === '/' ? '/index.md' : `/agent-markdown${pathname}`;

    return NextResponse.rewrite(markdownUrl);
  }

  const response = NextResponse.next();
  response.headers.set('Link', DISCOVERY_LINKS);
  response.headers.set('Vary', 'Accept, Accept-Encoding');
  return response;
}

export const config = {
  matcher: ['/:path*'],
};
