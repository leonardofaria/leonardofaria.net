// https://playwright.tech/blog/generate-opengraph-images-using-playwright
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import { getAbsoluteURL } from '../../lib/utils';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const { BROWSERLESS_API_TOKEN } = process.env;

const LOCAL_CHROME_EXECUTABLE =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browserWSEndpoint = `wss://chrome.browserless.io?token=${BROWSERLESS_API_TOKEN}`;

const getBrowser = () =>
  IS_PRODUCTION
    ? puppeteer.connect({
        browserWSEndpoint,
      })
    : puppeteer.launch({ executablePath: LOCAL_CHROME_EXECUTABLE });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1.5,
    });
    const url = getAbsoluteURL((req.query.path as string) || '');
    await page.goto(url, {
      timeout: 0,
    });
    const data = await page.screenshot({
      type: 'png',
    });
    setTimeout(() => browser.close(), 0);
    res.setHeader('cache-control', 's-maxage=60, stale-while-revalidate');
    res.setHeader('Content-Type', 'image/png');
    res.end(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log({ error });
  }
};
