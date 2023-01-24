// https://playwright.tech/blog/generate-opengraph-images-using-playwright
import { NextApiRequest, NextApiResponse } from 'next';
import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';
import { getAbsoluteURL } from '../../lib/utils';

const LOCAL_CHROME_EXECUTABLE =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const executablePath =
      (await chromium.executablePath) || LOCAL_CHROME_EXECUTABLE;

    const browser = await puppeteer.launch({
      executablePath,
      args: chromium.args,
      headless: false,
    });

    const page = await browser.newPage();
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
