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
                    content
                    slug
                    status
                    template
                    format
                    title
                    date(formatString: "dddd, MMMM YYYY")
                    link
                    categories {
                        slug
                    }
                    featured_media{
                        localFile{
                            childImageSharp{
                                resolutions(width:500, height: 200){
                                    src
                                    width
                                    height
                                }
                            }
                        }
                        alt_text
                    }
                }
            }
        }
    }
`