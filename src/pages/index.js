import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import "./css/index.css"
class HomePage extends Component {
  render() {
    // This variable will return all the fields related to the post
    const home = this.props.data.allWordpressPage.edges[0].node

    return (
      <Layout>
        <div className="home__page">
            <h1 dangerouslySetInnerHTML={{__html: home.title}}/>
            <div dangerouslySetInnerHTML={{__html: home.content}}/>
            <p>
              <strong dangerouslySetInnerHTML={{__html: home.date}}/>
            </p>
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
        date(formatString: "dddd, MMMM YYYY")
      }
    }
  }
}

`