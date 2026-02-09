import { existsSync, readdirSync, statSync } from 'fs';
import { readFile } from 'fs/promises';
// @ts-ignore
import path, { parse } from 'path';
import chromium from '@sparticuz/chromium-min';
import matter from 'gray-matter';
import lineReplace from 'line-replace';

const BASE_URL = 'http://localhost:9000';

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

   
  for (const file of files) {
     
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
  ogImagePath: string,
) {
  try {
    console.log(`  Visiting ${url}`);
    const page = await browser.newPage();

    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1.5,
    });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30 * 1000 });
    await page.screenshot({
      type: 'png',
      path: `./public${ogImagePath}`,
    });

    console.log('  ✓ Screenshot saved');
  } catch (error) {
    console.error(`  Error visiting: ${url}`);
    console.log(error);
  }
}

async function launchBrowser() {
  const isProduction = process.env.NODE_ENV === 'production';
  console.log(
    `Launching browser in ${isProduction ? 'production' : 'dev'} mode`,
  );
  const executablePath = isProduction
    ? await chromium.executablePath(
        `https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar`,
      )
    : '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';

  const options = {
    executablePath,
    headless: isProduction ? chromium.headless : false,
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
