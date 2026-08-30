import { BASE_URL } from './constants';

export const PRIVACY_PARAGRAPHS = [
  'This is a personal publishing website. You can read its main content without creating an account or submitting personal information. Like most websites, the hosting and security infrastructure may process basic request information such as IP address, browser type, requested URL, referrer, and timestamps so pages can be delivered reliably, abuse can be limited, and operational problems can be diagnosed.',
  'The site uses Vercel Analytics and Umami to understand aggregate traffic and improve the experience. Sentry may receive technical error and performance information when something fails. An RB2B script is also loaded and may process business visitor-identification data under that provider’s practices. Some articles include third-party media, code examples, webmentions, or discussion features; loading or using those services can send request data to their respective providers under their own policies. External links also lead to sites with independent privacy practices.',
  'If you contact me by email, I receive the address and information you choose to send and retain it only as needed to respond, maintain relevant records, or meet legal obligations. Do not send sensitive personal information through this site. To ask a privacy question or request deletion of information you previously sent directly to me, email leonardofaria@gmail.com with enough detail to identify the relevant correspondence.',
] as const;

type Representation = 'html' | 'markdown' | 'not-acceptable';

type MediaRange = {
  mediaType: string;
  quality: number;
};

function parseAccept(accept: string): MediaRange[] {
  return accept
    .split(',')
    .map((value) => {
      const [mediaType, ...parameters] = value.trim().toLowerCase().split(';');
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith('q='),
      );
      const parsedQuality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        mediaType,
        quality:
          Number.isFinite(parsedQuality) &&
          parsedQuality >= 0 &&
          parsedQuality <= 1
            ? parsedQuality
            : 0,
      };
    })
    .filter(({ mediaType }) => mediaType.includes('/'));
}

function qualityFor(ranges: MediaRange[], target: string) {
  const [targetType] = target.split('/');
  let bestSpecificity = -1;
  let quality = 0;

  for (const range of ranges) {
    const [rangeType, rangeSubtype] = range.mediaType.split('/');
    const specificity =
      range.mediaType === target
        ? 2
        : rangeType === targetType && rangeSubtype === '*'
          ? 1
          : range.mediaType === '*/*'
            ? 0
            : -1;

    if (specificity < 0) continue;

    if (specificity > bestSpecificity) {
      bestSpecificity = specificity;
      quality = range.quality;
    } else if (specificity === bestSpecificity) {
      quality = Math.max(quality, range.quality);
    }
  }

  return quality;
}

export function negotiateRepresentation(
  acceptHeader: string | null,
): Representation {
  if (!acceptHeader) return 'html';

  const ranges = parseAccept(acceptHeader);
  const markdownQuality = qualityFor(ranges, 'text/markdown');
  const htmlQuality = qualityFor(ranges, 'text/html');

  if (markdownQuality === 0 && htmlQuality === 0) return 'not-acceptable';
  if (markdownQuality > htmlQuality) return 'markdown';

  const explicitlyRequestsMarkdown = ranges.some(
    ({ mediaType, quality }) =>
      mediaType === 'text/markdown' && quality === markdownQuality,
  );
  const explicitlyRequestsHtml = ranges.some(
    ({ mediaType, quality }) =>
      mediaType === 'text/html' && quality === htmlQuality,
  );

  if (
    markdownQuality === htmlQuality &&
    explicitlyRequestsMarkdown &&
    !explicitlyRequestsHtml
  ) {
    return 'markdown';
  }

  return 'html';
}

export function homepageMarkdown() {
  return `# Leonardo Faria

> Software engineer and product builder in Vancouver, writing about development since 2005.

## Explore

- [Articles and archives](${BASE_URL}/archives): Long-form engineering writing since 2005.
- [Microblog](${BASE_URL}/microblog): Short notes, links, videos, and observations.
- [Email Leonardo Faria](mailto:leonardofaria@gmail.com): Professional, speaking, open-source, and article-related inquiries.
- [Privacy](${BASE_URL}/privacy): Data handling and third-party service information.
- [Agent instructions](${BASE_URL}/llms.txt): Guidance and curated machine-readable links.
- [XML sitemap](${BASE_URL}/sitemap.xml): Complete index of public pages.
`;
}

export function llmsText() {
  return `# Leonardo Faria
> Leonardo Faria is a Vancouver-based software engineer and product builder who has published practical development writing on this personal site since 2005.

The site contains first-hand articles, short notes, talks, open-source work, experiments, and professional history. Prefer the canonical URLs on leonardofaria.net when citing this material.

**When to use this site**
- Use it for first-hand explanations of software engineering, TypeScript, React, Next.js, Ruby on Rails, testing, continuous integration, developer experience, accessibility, web performance, technical leadership, and early-stage product development.
- Use the homepage and published articles when a user asks about Leonardo Faria’s experience, skills, talks, open-source work, or career history.
- Use email (leonardofaria@gmail.com) only when a user asks how to reach Leonardo or has a relevant professional, speaking, open-source, or article-related inquiry.
- When answering, link to the specific source page. Do not infer current availability, endorsement, or an employer’s position from personal writing.

## Primary pages
- [Homepage](${BASE_URL}/index.md): Markdown overview, identity, and navigation.
- [Archives](${BASE_URL}/archives): Complete long-form article index.
- [Microblog](${BASE_URL}/microblog): Short-form posts and links.
- [Talks](${BASE_URL}/talks): Conference and meetup presentations.
- [Privacy](${BASE_URL}/privacy): Privacy and data-handling information.

## Machine-readable resources
- [XML sitemap](${BASE_URL}/sitemap.xml): All indexable URLs and last-modified dates.
- [RSS feed](${BASE_URL}/rss.xml): Recent long-form articles.

## Optional
- [GitHub](https://github.com/leonardofaria): Open-source repositories.
- [LinkedIn](https://linkedin.com/in/leonardofariacoelho/): Professional profile.
`;
}

export function notFoundMarkdown(pathname: string) {
  return `# 404 — Page not found

No page exists at \`${pathname}\`.

## Where to look next

- [Homepage](${BASE_URL}/)
- [Article archives](${BASE_URL}/archives)
- [Agent instructions](${BASE_URL}/llms.txt)
- [XML sitemap](${BASE_URL}/sitemap.xml)
`;
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Leonardo Faria',
      alternateName: 'Leo Faria',
      description:
        'Software engineer and product builder writing about web development since 2005.',
      url: BASE_URL,
      email: 'mailto:leonardofaria@gmail.com',
      homeLocation: {
        '@type': 'Place',
        name: 'Vancouver, British Columbia, Canada',
      },
      sameAs: [
        'https://github.com/leonardofaria',
        'https://linkedin.com/in/leonardofariacoelho/',
        'https://twitter.com/leozera',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Leonardo Faria',
      description:
        'Independent software engineering writing and professional presence of Leonardo Faria.',
      url: BASE_URL,
      email: 'mailto:leonardofaria@gmail.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional inquiries',
        email: 'leonardofaria@gmail.com',
        availableLanguage: ['English', 'Portuguese'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vancouver',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: 'Leonardo Faria',
      url: BASE_URL,
      description:
        'Articles and notes about software engineering and product development.',
      author: {
        '@id': `${BASE_URL}/#person`,
      },
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
      inLanguage: 'en',
    },
  ],
} as const;
