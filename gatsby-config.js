require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: "myps",
    description: "Matsui Yuki ポートフォリオ",
    author: "Matsui Yuki"
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
        resolve: "gatsby-plugin-canonical-urls",
        options: {
          siteUrl: "https://cozito.me",
          stripQueryString: true,
        },
    },
    {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: "https://www.cozito.me",
          sitemap: "https://cozito.me/sitemap.xml",
          policy: [{ userAgent: "*", disallow: "/" }]
        }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Matsui Yuki Portfolio Site",
        icon: "src/images/icon.png",
        short_name: "MYPS",
        start_url: "/",
        background_color: "#ffffff",

      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              maxWidth: 680,
            },
          },
        ],
      },
    },
  ],
};
