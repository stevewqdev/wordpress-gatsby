
import React from 'react'
import Layout from "../layouts/index"
import Link from 'gatsby-link'
import PaginationController from '../components/blog/paginationController/paginationController'
import ReturnButton from '../components/master/returnButton/returnButton'

import "./css/posts.css"

const PostsIndex = ({ pageContext }) => {
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
                <div key={node.id} className="blog__list" >
                    {/* 
                      Wordpress return the whole link and the redirections does not work
                      properly, so, here we are using the function .replace to remove the 
                      main url from the wordpress link. 

                      And we are using process.env.GATSBY_WP_URL variable, that it's set on 
                      the .env.development and .env.production
                    */}
 
                    <div className={node.featured_media ? 'list__post__info' : 'list__post__info --full__width'  }>
                      <p className="list__post__date"><small><b>{node.date}</b></small></p>
                      <Link to={'/post/'+node.slug}  >
                        <h1 className="list__post__title" dangerouslySetInnerHTML={{__html: node.title}}/>
                      </Link>
                      <div className="list__post__excerpt " dangerouslySetInnerHTML={{__html: node.content.substring(0, 280) }}/>
                    </div>
                    
                      {
                        node.featured_media
                        ?
                        <div className="list__post__image">
                          <Link to={'/post/'+node.slug}  >
                            <img src={node.featured_media.localFile.childImageSharp.resolutions.src} alt={node.featured_media.alt_text} />
                          </Link>
                        </div>
                        : ''
                      }
                </div>
            ))}
            <PaginationController 
                next={last} nextUrl={"/blog/" + nextUrl} 
                previous={first} previousUrl={"/blog/" + previousUrl} 
                customClass={'blog__pagination__controller'}
            >
            </PaginationController>
            <ReturnButton redirectionLink={'/'} customClass={'blog__return__button'}></ReturnButton>
        </div> 
    </Layout>
  )
} 
export default PostsIndex

