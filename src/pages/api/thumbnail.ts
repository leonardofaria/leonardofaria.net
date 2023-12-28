// https://playwright.tech/blog/generate-opengraph-images-using-playwright
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';

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

// eslint-disable-next-line import/no-anonymous-default-export, consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1.5,
    });

    const url = req.query.url as string;

    if (!ALLOWED_ORIGINS.includes(new URL(url).hostname)) {
      return res.status(403).end();
    }
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30 * 1000 });
    const data = await page.screenshot({
      type: 'png',
    });
    setTimeout(() => browser.close(), 0);
    if (IS_PRODUCTION) {
      res.setHeader('cache-control', 's-maxage=60, stale-while-revalidate');
    }
    res.setHeader('Content-Type', 'image/png');
    res.end(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log({ error });
    return res.status(500).end(error);
  }
};
