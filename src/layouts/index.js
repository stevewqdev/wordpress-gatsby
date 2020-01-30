/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import "./index.css"
import "./custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressSiteMetadata {
        edges {
          node {
            description
            home
            name
            url
          }
        }
      }
      logo: allWordpressWpMedia(filter: {title: {eq: "logo"}}) {
        nodes {
          source_url
          title
        }
      }
      favicon: allWordpressWpMedia(filter: {title: {eq: "favicon"}}) {
        nodes {
          source_url
          title
        }
      }
    }
  `)

  const siteData = data.allWordpressSiteMetadata.edges[0].node
  let siteLogo = false, 
      siteFavicon = false
  
  // We verify if the logo query returned something
  if(data.logo.nodes.length > 0){
    siteLogo = data.logo.nodes[0].source_url
  }
  // We verify if the favicon query returned something
  if(data.favicon.nodes.length > 0){
    siteFavicon = data.favicon.nodes[0].source_url
  }

  return (
    <>
      <Helmet>
        <link rel="icon" href={siteFavicon} />
      </Helmet>
      <Header siteTitle={siteData.name} siteLogo={siteLogo} />
      <div className="master__wrapper">
        <main >{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout