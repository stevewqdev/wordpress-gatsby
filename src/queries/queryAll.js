'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                    date(formatString: "dddd, MMMM YYYY")
                }
            }
        }
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              content
              template
              format
              title
              date(formatString: "MMMM DD, YYYY")
              link
              categories {
                slug
                description
                path
              }
              featured_media {
                localFile {
                  childImageSharp {
                    resolutions(width: 500, height: 200) {
                      src
                      width
                      height
                      srcWebp
                    }
                  }
                }
                alt_text
              }
              author {
                name
                avatar_urls {
                  wordpress_48
                }
                url
                wordpress_id
              }
            }
          }
        }
    }
`