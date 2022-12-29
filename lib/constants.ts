import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

// TODO: add more constants here, like social media

export const AUTHOR = 'Leonardo Faria';
export const BASE_URL = 'https://leonardofaria.net';
export const DISQUS_SHORTNAME = 'leonardofaria';
export const WEBSITE_TITLE = 'Leonardo Faria';
export const WEBSITE_SUBHEADING = "Hi, I'm Leo 👋";
export const WEBSITE_DESCRIPTION =
  'I am Leonardo Faria, a Brazilian developer living in Vancouver. This is my blog about software development and more since 2005.';

const fullConfig = resolveConfig(tailwindConfig);
export const LARGE_SCREEN_BREAKPOINT = parseInt(
  fullConfig?.theme?.screens?.lg,
  10
);

export const UMAMI_URL = 'https://umami.leonardofaria.net/umami.js';
export const UMAMI_SITEID = 'ef25ee64-202b-4378-822f-22398533a59c';
