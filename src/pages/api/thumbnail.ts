// https://playwright.tech/blog/generate-opengraph-images-using-playwright
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';
import { getAbsoluteURL } from '../../lib/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(
        'https://github.com/Sparticuz/chromium/releases/download/v109.0.6/chromium-v109.0.6-pack.tar'
      ),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
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
