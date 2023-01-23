// https://playwright.tech/blog/generate-opengraph-images-using-playwright
import { NextApiRequest, NextApiResponse } from 'next';
import chrome from 'chrome-aws-lambda';
import { chromium } from 'playwright-core';
import { getAbsoluteURL } from '../../lib/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await chromium.launch({
      args: chrome.args,
      // executablePath:
      //   process.env.NODE_ENV !== 'development'
      //     ? await chrome.executablePath
      //     : '/bin/chromium',
      headless: true,
    });

    const page = await browser.newPage({
      viewport: {
        width: 1200,
        height: 630,
      },
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
