require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
  // The site metadata below its not goin the be used because we are pulling this data from wordpress
  siteMetadata: {
    title: ``,
    description: ``,
    subtitle: ``,
    author: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Quicksand`,
            subsets: [`latin`]
          },
          {
            family: `Quicksand`,
            variants: [`400`,  `500` ,  `700`]
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `700`]
          },
          {
            family: `Playfair Display`,
            subsets: [`latin`]
          },
          {
            family: `Abril Fatface`,
            variants: [`400`]
          },
          {
            family: `Abril Fatface`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
          endpoint: `${process.env.MAILCHIMP_KEY}`, 
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        }
      }
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