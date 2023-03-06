import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/world-globe.svg', '/world-map.svg'],
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || 'US';
  const city = geo?.city || 'San Francisco';
  const latitude = geo?.latitude || '37.7749';
  const longitude = geo?.longitude || '122.4194';

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);
  url.searchParams.set('latitude', latitude);
  url.searchParams.set('longitude', longitude);

  return NextResponse.rewrite(url);
}
