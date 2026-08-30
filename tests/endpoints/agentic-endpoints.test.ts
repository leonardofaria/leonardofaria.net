import assert from 'node:assert/strict';
import test from 'node:test';

const BASE_URL = process.env.AGENTIC_TEST_BASE_URL ?? 'http://localhost:8888';

function visibleText(html: string) {
  return html
    .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function headerHasToken(response: Response, header: string, token: string) {
  const values =
    response.headers
      .get(header)
      ?.split(',')
      .map((value) => value.trim().toLowerCase()) ?? [];

  assert.ok(
    values.includes(token.toLowerCase()),
    `${header} must include ${token}`,
  );
}

test('homepage exposes substantial HTML, identity metadata, and JSON-LD', async () => {
  const response = await fetch(`${BASE_URL}/`, {
    headers: { Accept: 'text/html' },
  });
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /^text\/html/);
  assert.match(html, /<h1\b[^>]*>[\s\S]*Leonardo Faria/);
  assert.ok(visibleText(html).length >= 500);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/leonardofaria\.net"\/?>/,
  );
  assert.match(html, /<meta property="og:type" content="website"\/?>/);
  assert.match(html, /<meta property="og:image"/);
  assert.match(html, /<script type="application\/ld\+json">/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /"@type":"Organization"/);
});

test('homepage serves and correctly varies Markdown using q-values', async () => {
  const markdownResponse = await fetch(`${BASE_URL}/`, {
    headers: { Accept: 'text/markdown' },
  });
  const markdown = await markdownResponse.text();

  assert.equal(markdownResponse.status, 200);
  assert.match(
    markdownResponse.headers.get('content-type') ?? '',
    /^text\/markdown; charset=utf-8$/,
  );
  headerHasToken(markdownResponse, 'vary', 'Accept');
  headerHasToken(markdownResponse, 'vary', 'Accept-Encoding');
  assert.match(markdown, /^# Leonardo Faria/);
  assert.doesNotMatch(markdown, /<html\b/i);

  const preferredHtml = await fetch(`${BASE_URL}/`, {
    headers: { Accept: 'text/html;q=1, text/markdown;q=0.5' },
  });
  assert.match(preferredHtml.headers.get('content-type') ?? '', /^text\/html/);

  const preferredMarkdown = await fetch(`${BASE_URL}/`, {
    headers: { Accept: 'text/html;q=0.5, text/markdown;q=1' },
  });
  assert.match(
    preferredMarkdown.headers.get('content-type') ?? '',
    /^text\/markdown/,
  );

  const unsupported = await fetch(`${BASE_URL}/`, {
    headers: { Accept: 'application/json' },
  });
  assert.equal(unsupported.status, 406);
  headerHasToken(unsupported, 'vary', 'Accept');
});

test('404 responses use the real status and provide recovery links', async () => {
  const missingUrl = `${BASE_URL}/definitely-missing-agentic-test-page`;
  const response = await fetch(missingUrl);
  const html = await response.text();

  assert.equal(response.status, 404);
  assert.match(html, /Page not found/);

  const markdownResponse = await fetch(missingUrl, {
    headers: { Accept: 'text/markdown' },
  });
  const markdown = await markdownResponse.text();

  assert.equal(markdownResponse.status, 404);
  assert.match(
    markdownResponse.headers.get('content-type') ?? '',
    /^text\/markdown/,
  );
  headerHasToken(markdownResponse, 'vary', 'Accept');
  assert.match(markdown, /^# 404 — Page not found/);
  assert.match(markdown, /\/llms\.txt/);
  assert.match(markdown, /\/sitemap\.xml/);
});

test('llms.txt is valid Markdown with specific when-to-use guidance', async () => {
  const response = await fetch(`${BASE_URL}/llms.txt`);
  const content = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /^text\/markdown/);
  assert.match(content, /^# Leonardo Faria\n>/);
  assert.match(content, /\*\*When to use this site\*\*/);
  assert.match(content, /## Primary pages/);
});

test('sitemap and robots expose indexable URLs and lastmod dates', async () => {
  const [sitemapResponse, robotsResponse] = await Promise.all([
    fetch(`${BASE_URL}/sitemap.xml`),
    fetch(`${BASE_URL}/robots.txt`),
  ]);
  const [sitemap, robots] = await Promise.all([
    sitemapResponse.text(),
    robotsResponse.text(),
  ]);

  assert.equal(sitemapResponse.status, 200);
  assert.match(
    sitemapResponse.headers.get('content-type') ?? '',
    /application\/xml/,
  );
  assert.match(sitemap, /<urlset\b/);
  assert.match(sitemap, /<loc>https:\/\/leonardofaria\.net\/privacy<\/loc>/);
  assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}T/);
  assert.doesNotMatch(
    sitemap,
    /<loc>https:\/\/leonardofaria\.net\/about<\/loc>/,
  );
  assert.doesNotMatch(
    sitemap,
    /<loc>https:\/\/leonardofaria\.net\/about\/resume<\/loc>/,
  );
  assert.doesNotMatch(
    sitemap,
    /<loc>https:\/\/leonardofaria\.net\/about\/colophon<\/loc>/,
  );
  assert.doesNotMatch(
    sitemap,
    /<loc>https:\/\/leonardofaria\.net\/contact<\/loc>/,
  );
  assert.doesNotMatch(
    sitemap,
    /<loc>https:\/\/leonardofaria\.net\/likes<\/loc>/,
  );

  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Sitemap: https:\/\/leonardofaria\.net\/sitemap\.xml/);
});

for (const path of ['/privacy']) {
  test(`${path} is a substantial trust page`, async () => {
    const response = await fetch(`${BASE_URL}${path}`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /<h1\b/);
    assert.ok(visibleText(html).length >= 500);
    assert.match(
      html,
      new RegExp(
        `<link rel="canonical" href="https:\\/\\/leonardofaria\\.net${path}"\\/?>`,
      ),
    );
  });
}
