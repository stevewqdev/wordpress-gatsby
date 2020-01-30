import React from "react"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Link from "gatsby-link"

const NotFoundPage = () => (
  <Layout>
    <div className="not__found__page">
      <SEO title="404: Not found" />
      <h1>Ups!</h1>
      <p>It seems that you just hit a route that doesn&#39;t exist... you better return to home</p>
      <Link to={'/'}>
        <button className={'btn --main'}>Return to home</button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
