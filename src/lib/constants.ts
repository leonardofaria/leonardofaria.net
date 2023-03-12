export const IS_SSR = typeof window !== 'undefined';
export const AUTHOR = 'Leonardo Faria';
export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
export const DISQUS_SHORTNAME = 'leonardofaria';
export const WEBSITE_TITLE = 'Leonardo Faria';
export const WEBSITE_SUBHEADING = "Hi, I'm Leo";
export const WEBSITE_DESCRIPTION =
  'I like to write code and build products. Here, I write about development since 2005. Currently Staff Software Engineer at Lattice.';
export const MICROBLOG_INTRO =
  'Remember Microblogs? My favourite links, videos and short thoughts';

export const LARGE_SCREEN_BREAKPOINT = 1024;

export const SOCIAL_LINKS = [
  {
    name: 'Mastodon',
    url: 'https://indieweb.social/@leonardo',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/leozera',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/leonardofaria',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/leonardofariacoelho/',
  },
  {
    name: 'Email',
    url: 'mailto:leonardofaria@gmail.com',
  },
  {
    name: 'RSS',
    url: `${BASE_URL}/rss.xml`,
  },
];

export const UMAMI_URL = 'https://umami.leonardofaria.net/umami.js';
export const UMAMI_SITEID = 'ef25ee64-202b-4378-822f-22398533a59c';
