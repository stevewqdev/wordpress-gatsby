import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import { globalHistory } from "@reach/router"
import "./css/index.css"
class HomePage extends Component {
  render() {

    return (
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="This is a starter site for Gatsby + Wordpress"/>
            <title>A Gatsby + Wordpress Demo Site</title>
            <link rel="canonical" href={globalHistory.location.origin} />
        </Helmet>
        <div className="home__page">
          <div className="home__page__content container__base">
            <h1 className={'floating__title'}>Hello</h1>
            <div>
              <h2 className={''} >Welcome to the demo site for the</h2>
              <h2 className={''} >WordPress + Gatsby website</h2>
              <p className="has-text-align-center">
                This is a demo site created with WordPress and using Gatsby.js as the framework. You can check the different links where we build async calls and added dynamic content into the pages, also theres a link where you can check a blog that it’s pulling data from WordPress and another link where there is a Mailchimp integration.
              </p>
            </div>
            <div>
              <a href="https://github.com/stevewqdev/wordpress-gatsby/tree/demo_site_branch" rel="noopener noreferrer" target="_BLANK">
                <button className={'btn --main'}>See the repositorie</button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default HomePage
/* ====== Here goes your home query ======= //

export const pageQuery = graphql`
query MyQuery {
  allWordpressPage(filter: {path: {eq: "/"}}) {

  }
}
`
=========================================== */