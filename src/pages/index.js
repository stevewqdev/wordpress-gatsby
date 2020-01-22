import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";

import "./css/index.css"
class HomePage extends Component {
  render() {
    // This variable will return all the fields related to the post
    const home = this.props.data.allWordpressPage.edges[0].node
    const acfFields = this.props.data.allWordpressPage.edges[0].node.acf
    const yoastFields = this.props.data.allWordpressPage.edges[0].node.yoast_meta
    return (
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={yoastFields.yoast_wpseo_metadesc}/>
            <title>{yoastFields.yoast_wpseo_title}</title>
            <link rel="canonical" href={yoastFields.yoast_wpseo_canonical} />
        </Helmet>
        <div className="home__page">
          <div className="home__page__content container__base">
            <h1 className={'floating__title'} dangerouslySetInnerHTML={{__html: acfFields.title}}/>
            <div dangerouslySetInnerHTML={{__html: home.content}}/>
            <div>
              <a href={acfFields.button[0].url} target="_BLANK">
                <button className={'btn --main'}>{acfFields.button[0].text}</button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomePage
/*
============================================
This is the query for the home page, default
fields are the default from wordpress (you can 
add more)

To select the acf fields you need to add them  
into the query and the fields you want to retrieve

acf {
  field1
  field1
}

This query will always return the page set as
home page on the wordpress backend
============================================
*/
export const pageQuery = graphql`
query MyQuery {
  allWordpressPage(filter: {path: {eq: "/"}}) {
    edges {
      node {
        id
        title
        content
        date(formatString: "MMMM DD, YYYY")
        acf {
          title
          button {
            text
            url
          }
        }
        yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_metadesc
          yoast_wpseo_canonical
        }
      }
    }
  }
}

`