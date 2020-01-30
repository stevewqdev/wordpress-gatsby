
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
        <div className="blog container__base">
            <div className="listed__counter container__base">
                <div className="row">
                  <h5><span>{pageCount}</span> Total pages - </h5> 
                  <h5><span>{pageCount * 3}</span> Total Results</h5>
                </div>
            </div>
            {group.map(({ node }, index) => (
                <div key={node.id}  className={index % 2 === 0 ? 'blog__list --right container__base' : 'blog__list --left container__base'}  >
                    <div className="row">
                      <div className={node.featured_media ? 'list__post__info --half__width' : 'list__post__info --full__width '  }>
                        <p className="list__post__date"><small><b>{node.date}</b></small></p>
                        <Link to={`/post/${node.slug}`} >
                          <h1 className="list__post__title" dangerouslySetInnerHTML={{__html: node.title}}/>
                        </Link>
                        {
                          node.content !== 'undefined'
                          ? <div className="list__post__excerpt " dangerouslySetInnerHTML={{__html: node.content.substring(0, 280) }}/>
                          : ''
                        }
                        <div className="list__post__author">
                          <p><small><b>by {node.author.name}</b></small></p>
                        </div>
                      </div>
                      {
                        node.featured_media
                        ?
                        <div className="list__post__image --half__width">
                          <Link to={`/post/${node.slug}`}  >
                            <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
                          </Link>
                        </div>
                        : ''
                      }
                    </div>
                </div>
            ))}
            <PaginationController 
                next={last} indexNextPage={nextUrl} nextUrl={`/blog/${nextUrl}`} 
                previous={first} indexPrevPage={previousUrl} previousUrl={`/blog/${previousUrl}`} 
                customClass={'blog__pagination__controller'}
                pageTotal={pageCount}
            >
            </PaginationController>
            <ReturnButton buttonText="Return to home" redirectionLink={'/'} customClass={'blog__return__button'}></ReturnButton>
        </div> 
    </Layout>
  )
} 
export default PostsIndex

