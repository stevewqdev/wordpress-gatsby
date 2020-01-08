
import React from 'react'
import Layout from "../layouts/index"
import Link from 'gatsby-link'
import "./css/posts.css"
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
            <div className="listed__counter">
                <h5><span>{pageCount}</span> Total pages - </h5> 
                <h5><span>{pageCount * 3}</span> Total Results</h5>
            </div>
            {group.map(({ node }) => (
                <div key={node.id} className="blog__list">
                    {/* 
                      Wordpress return the whole link and the redirections does not work
                      properly, so, here we are using the function .replace to remove the 
                      main url from the wordpress link. 

                      And we are using process.env.GATSBY_WP_URL variable, that it's set on 
                      the .env.development and .env.production
                    */}
 
                    <div className={node.featured_media ? 'list__post__info' : 'list__post__info --full__width'  }>
                      <p className="list__post__date"><small><b>{node.date}</b></small></p>
                      <Link to={'/post/'+node.slug}>
                        <h1 class="list__post__title" dangerouslySetInnerHTML={{__html: node.title}}/>
                      </Link>
                      <div className="list__post__excerpt " dangerouslySetInnerHTML={{__html: node.content.substring(0, 280) }}/>
                    </div>
                    
                      {
                        node.featured_media
                        ?
                        <div className="list__post__image">
                        <img src={node.featured_media.localFile.childImageSharp.resolutions.src} alt={node.featured_media.alt_text} />
                        </div>
                        : ''
                      }
                    
                                
                </div>
            ))}

            <div className="blog__controller">
                <div className="previousLink">
                    <NavLink test={first} url={"/blog/" + previousUrl} text="<< Go to Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={last} url={"/blog/" + nextUrl} text="Go to Next Page >>" />
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

