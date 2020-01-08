require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  // The site metadata below its not goin the be used because we are pulling this data from wordpress
  siteMetadata: {
    title: `Raxo - Wordpress + Gatsby`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    subtitle: `Raxo - Development`,
    author: `@steveRaxo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`, `700`]
          },
          {
            family: `Quicksand`,
            variants: [`400`,  `500` ,  `700`]
          },
          {
            family: `Playfair Display`,
            subsets: [`latin`]
          },
          {
            family: `Quicksand`,
            subsets: [`latin`]
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // This is the base url for the website, right now its pulling data from the env file
        baseUrl: `${process.env.GATSBY_WP_API_LINK}`,
        // This is the protocol used on the url for the website, right now its pulling data from the env file
        protocol: `${process.env.GATSBY_WP_PROTOCOL}`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus"
        ],
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
