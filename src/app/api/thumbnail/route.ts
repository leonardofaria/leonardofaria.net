import { NextRequest } from 'next/server';
import puppeteer from 'puppeteer-core';
import { BASE_URL } from 'src/lib/constants';

export const runtime = 'nodejs';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const { BROWSERLESS_API_TOKEN } = process.env;
const ALLOWED_ORIGINS = ['localhost', 'leonardofaria.net'];

const LOCAL_CHROME_EXECUTABLE =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browserWSEndpoint = `wss://chrome.browserless.io?token=${BROWSERLESS_API_TOKEN}`;

const getBrowser = () =>
  IS_PRODUCTION
    ? puppeteer.connect({
        browserWSEndpoint,
      })
    : puppeteer.launch({
        executablePath: LOCAL_CHROME_EXECUTABLE,
        headless: 'new',
      });

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const urlParam = searchParams.get('url');
    const pathParam = searchParams.get('path');
    const url =
      urlParam ??
      (pathParam
        ? `${BASE_URL}${pathParam.startsWith('/') ? pathParam : `/${pathParam}`}`
        : null);

    if (!url) {
      return new Response('Missing url or path', { status: 400 });
    }

    if (!ALLOWED_ORIGINS.includes(new URL(url).hostname)) {
      return new Response(null, { status: 403 });
    }

    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1.5,
    });

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30 * 1000 });
    const data = await page.screenshot({
      type: 'png',
    });
    setTimeout(() => browser.close(), 0);

    return new Response(new Uint8Array(data), {
      headers: {
        'Content-Type': 'image/png',
        ...(IS_PRODUCTION
          ? { 'cache-control': 's-maxage=60, stale-while-revalidate' }
          : {}),
      },
    });
  } catch (error) {
    console.log({ error });
    return new Response(error instanceof Error ? error.message : 'Error', {
      status: 500,
    });
  }
}
