
import React, { Component } from "react"
import Link from 'gatsby-link'
import "./paginationController.css"
const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}
class PaginationController extends Component {
    render() {
        const props = this.props; 
        const nextPage = props.indexNextPage;
        const pages = []; 
        if(props.pageTotal > 0){
          for (let index = 0; index < props.pageTotal; index++) {
            pages.push(index);
          }
        }
        return (
            <div className={'pagination__controller ' + props.customClass}>
                <div className={'paginated__controller'}>
                {
                  pages.length > 0
                  ?
                  pages.map((index) => (
                    <div className={nextPage-1 === index+1 ? 'paginated__list current__page' :'paginated__list' }>
                      <Link to={index+1 === 1 ? `/blog/` : `/blog/${index+1}`}>
                        {index+1}
                      </Link>
                    </div>
                  ))
                  : ''
                }
                </div>
                <div className={'paginated__previous__next'}>
                  {
                    nextPage == 2
                    ? ''
                    : <div className={'previousLink  ' + nextPage}>
                          <NavLink test={props.previous} url={props.previousUrl} text="Go to Previous Page" />
                      </div>
                  }
                  {
                    nextPage > props.pageTotal
                    ? ''
                    : <div className="nextLink">
                          <NavLink test={props.next} url={props.nextUrl} text="Go to Next Page" />
                      </div>
                  }
                </div>

            </div>
        )
    }
}
export default PaginationController
