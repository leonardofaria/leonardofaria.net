import assert from 'node:assert/strict';
import test from 'node:test';
import {
  PRIVACY_PARAGRAPHS,
  homepageMarkdown,
  llmsText,
  negotiateRepresentation,
  notFoundMarkdown,
  structuredData,
} from '../src/lib/agentic';

test('negotiates HTML and Markdown according to Accept priorities', () => {
  assert.equal(negotiateRepresentation(null), 'html');
  assert.equal(negotiateRepresentation('*/*'), 'html');
  assert.equal(negotiateRepresentation('text/html'), 'html');
  assert.equal(negotiateRepresentation('text/markdown'), 'markdown');
  assert.equal(
    negotiateRepresentation('text/html;q=0.4, text/markdown;q=0.9'),
    'markdown',
  );
  assert.equal(
    negotiateRepresentation('text/html;q=1, text/markdown;q=0.5'),
    'html',
  );
  assert.equal(
    negotiateRepresentation('text/markdown;q=0, text/html;q=0'),
    'not-acceptable',
  );
  assert.equal(negotiateRepresentation('application/json'), 'not-acceptable');
});

test('publishes substantial server-renderable identity and trust content', () => {
  assert.ok(PRIVACY_PARAGRAPHS.join(' ').length >= 500);
});

test('homepage Markdown follows the llms.txt discovery conventions', () => {
  const markdown = homepageMarkdown();

  assert.match(markdown, /^# Leonardo Faria\n\n>/);
  assert.match(markdown, /https:\/\/leonardofaria\.net\/llms\.txt/);
  assert.match(markdown, /https:\/\/leonardofaria\.net\/sitemap\.xml/);
  assert.doesNotMatch(markdown, /\/about\/resume/);
});

test('llms.txt includes ordered identity, usage guidance, and file lists', () => {
  const content = llmsText();

  assert.match(content, /^# Leonardo Faria\n>/);
  assert.match(content, /\*\*When to use this site\*\*/);
  assert.match(content, /## Primary pages/);
  assert.match(content, /## Machine-readable resources/);
  assert.match(content, /- \[[^\]]+\]\(https?:\/\/[^)]+\):/);
  assert.doesNotMatch(content, /\/about\/resume/);
});

test('agent-facing 404 Markdown provides recovery links', () => {
  const markdown = notFoundMarkdown('/missing-page');

  assert.match(markdown, /^# 404 — Page not found/);
  assert.match(markdown, /`\/missing-page`/);
  assert.match(markdown, /\/archives/);
  assert.match(markdown, /\/llms\.txt/);
  assert.match(markdown, /\/sitemap\.xml/);
});

test('JSON-LD identifies the person, organization, and website', () => {
  const graph = structuredData['@graph'];
  const person = graph.find((entity) => entity['@type'] === 'Person');
  const organization = graph.find(
    (entity) => entity['@type'] === 'Organization',
  );
  const website = graph.find((entity) => entity['@type'] === 'WebSite');

  assert.ok(person);
  assert.ok(organization);
  assert.ok(website);
  assert.ok('sameAs' in person);
  assert.ok('contactPoint' in organization);
  assert.ok('address' in organization);
});
