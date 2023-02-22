import { existsSync, readdirSync, statSync } from 'fs';
import { readFile } from 'fs/promises';
// @ts-ignore
import lineReplace from 'line-replace';

import path, { parse } from 'path';
import matter from 'gray-matter';

const BASE_URL = 'http://localhost:3000';

/* eslint-disable no-console */

function getAllMarkdownFiles(dirPath: string, arrayOfFiles: string[]) {
  const files = readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(`${dirPath}/${file}`, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles
    .filter((file) => file.includes('.md') || file.includes('.mdx'))
    .sort()
    .reverse();
}

async function processMarkdownFiles(files: string[]) {
  const browser = await launchBrowser();

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    // eslint-disable-next-line no-await-in-loop
    const data = await readFile(file);
    const {
      data: { id, permalink, type, ogImage },
    } = matter(data);

    const slug = parse(file).name;
    const filename = type === 'Post' ? id : slug;
    const url = type === 'Post' ? permalink : `/microblog/${slug}`;

    if (!existsSync(`./public/${ogImage}`)) {
      const ogImagePath = `/images/og-images/${filename}.png`;
      console.log(`${filename} - image not found`);
      // eslint-disable-next-line no-await-in-loop
      await visitPageAndScreenshot(browser, `${BASE_URL}${url}`, ogImagePath);

      if (!ogImage) {
        lineReplace({
          file,
          line: 5,
          text: `type: ${type}\nogImage: ${ogImagePath}`,
          addNewLine: true,
          callback: () => {
            console.log(`${file} updated with open graph image`);
          },
        });
      }
      console.log('\n');
    } else {
      console.log(`${filename} - og:image found`);
    }
  }

  browser.close();
}

async function visitPageAndScreenshot(
  browser: any,
  url: string,
  ogImagePath: string
) {
  try {
    console.log(`  Visiting ${url}`);
    const page = await browser.newPage();

    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1.5,
    });
    await page.goto(url);
    await page.screenshot({
      type: 'png',
      path: `./public${ogImagePath}`,
    });

    console.log('  Screenshot saved');
  } catch (error) {
    console.error(`  Error visiting: ${url}`);
    console.log(error);
  }
}

async function launchBrowser() {
  const exePath =
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

  const options = {
    executablePath: exePath,
    headless: true,
  };

  const puppeteer = await import('puppeteer-core');
  const browser = await puppeteer.launch(options);

  return browser;
}

(async () => {
  const files = getAllMarkdownFiles('./content', []);
  await processMarkdownFiles(files);
})();

export {}; // Empty export because I have to
