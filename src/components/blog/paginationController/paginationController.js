
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

        return (
            <div className={'pagination__controller ' + props.customClass}>
                <div className={'paginated__controller'}>

                </div>
                <div className="previousLink">
                    <NavLink test={props.previous} url={props.previousUrl} text="<< Go to Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={props.next} url={props.nextUrl} text="Go to Next Page >>" />
                </div>
            </div>
        )
    }
}
export default PaginationController
