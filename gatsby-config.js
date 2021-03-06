module.exports = {
  siteMetadata: {
    title: `Намедни`,
    description: `Описание сайта`,
    author: `Леонид Парфенов`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrica`,
      options: {
        trackingId: "44300204",
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,
         webvisor: true,
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'draft.namednibook.ru',
        protocol: 'http',
        hostingWPCOM: false,
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
        },
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://draft.namednibook.ru',
          replacementUrl: '/',
        },
        concurrentRequests: 10,
        includedRoutes: ['/*/*/categories', '/*/*/posts'],
        normalizer: ({ entities }) => entities,
      },
    },
    'gatsby-plugin-no-javascript',
  ],
};
