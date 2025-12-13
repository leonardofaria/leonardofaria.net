import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/world-globe.svg', '/world-map.svg'],
};

export async function proxy(req: NextRequest) {
  const { nextUrl: url } = req;
  // Geo is no longer available in Next.js 16
  // Using default values instead
  const country = 'US';
  const city = 'San Francisco';
  const latitude = '37.7749';
  const longitude = '-122.4194';

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);
  url.searchParams.set('latitude', latitude);
  url.searchParams.set('longitude', longitude);

  return NextResponse.rewrite(url);
}
