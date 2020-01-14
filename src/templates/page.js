import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"

class Page extends Component {
  render() {
    const pageData = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageData.title}}/>
        <div dangerouslySetInnerHTML={{__html: pageData.content}}/>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`