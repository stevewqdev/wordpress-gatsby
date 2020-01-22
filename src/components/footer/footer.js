//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./footer.css"

const Footer = ({siteTitle}) => {
    // For this query to work you need to create acf field called copyright and added to the options page
    const data = useStaticQuery(graphql`
    query footerQuery {
      allWordpressAcfOptions {
        edges {
          node {
            options {
              copyright
            }
          }
        }
      }
    }
    `)
    var footerData = false;
    if(data.allWordpressAcfOptions.edges[0].node.options){
      footerData = data.allWordpressAcfOptions.edges[0].node.options
    }
    return (
      <>
        <footer className="footer__wrapper">
          <div className="footer__content container-fluid__base">
            {
              footerData
              ? <p dangerouslySetInnerHTML={{__html: `© ${new Date().getFullYear()}, ${footerData.copyright}`}}/> 
              : <p>© {new Date().getFullYear()}, Powered with {` `} <a href="https://www.gatsbyjs.org">Gatsby + Wordpress</a></p>
            }
          </div>
        </footer>
      </>
    )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer


