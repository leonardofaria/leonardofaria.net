const { withContentlayer } = require('next-contentlayer');
const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

/** @type {import('next').NextConfig} */
module.exports = withSentryConfig(
  withContentlayer({
    // Disabled due to react-embed
    // reactStrictMode: true,

    async rewrites() {
      return [
        // Hide /api from an image URL
        {
          source: '/world-globe.svg',
          destination: '/api/world-globe.svg',
        },
        {
          source: '/world-map.svg',
          destination: '/api/world-map.svg',
        },
      ];
    },

    sentry: {
      // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
      // for client-side builds. (This will be the default starting in
      // `@sentry/nextjs` version 8.0.0.) See
      // https://webpack.js.org/configuration/devtool/ and
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
      // for more information.
      hideSourceMaps: true,
    },

    experimental: {
      // The output of our getServerSideProps() return large chunks of
      // data because it contains our rendered Markdown.
      // The default, for a "Large Page Data" warning is 128KB
      // but many of our pages are much larger.
      // The warning is: https://nextjs.org/docs/messages/large-page-data
      // https://github.com/github/docs/blob/0820c53e071a0a28d5a1cad4cc27bcb6b0e37d45/next.config.js#L52
      largePageDataBytes: 1024 * 1024, // 1 MB
    },
  }),
  sentryWebpackPluginOptions
);
