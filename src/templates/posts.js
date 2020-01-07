import React from 'react'
import Layout from "../layouts/index"
import Link from 'gatsby-link'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
const { group, index, first, last, pageCount } = pageContext
const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString()
const nextUrl = (index + 1).toString()

return (
    <Layout>
        <div className="blog">
            {group.map(({ node }) => (
                <div key={node.id} className="blog__list">
                    <div className="blog__post"></div>
                    {/* 
                      Wordpress return the whole link and the redirections does not work
                      properly, so, here we are using the function .replace to remove the 
                      main url from the wordpress link. 

                      And we are using process.env.GATSBY_WP_URL variable, that it's set on 
                      the .env.development and .env.production
                    */}
                    <Link to={node.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}`, "")}>
                      <h1 dangerouslySetInnerHTML={{__html: node.title}}/>
                    </Link>
                    <div className="post__resume" dangerouslySetInnerHTML={{__html: node.content}}/>
                    <hr></hr>
                    <p><small>{node.date}</small></p>
                </div>
            ))}
            <div className="blog__controller">
                <h5>{pageCount} Total pages</h5> 
                <h5>{pageCount * 3} Total Results</h5>
                <div className="previousLink">
                    <NavLink test={first} url={"/blog/" + previousUrl} text="Go to Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={last} url={"/blog/" + nextUrl} text="Go to Next Page" />
                </div>
            </div>
            <div className="return__main__blog">
                <Link to={'/'}>Return to Homepage</Link>
            </div>
        </div> 
    </Layout>
  )
} 
export default IndexPage

