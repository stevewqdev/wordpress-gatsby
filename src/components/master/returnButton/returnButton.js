
import React, { Component } from "react"
import Link from 'gatsby-link'
import "./returnButton.css"

class PaginationController extends Component {
    render() {
        const props = this.props; 

        return (
            <div className={'return__main__blog ' + props.customClass}>
                <Link to={props.redirectionLink}>{props.buttonText}</Link>
            </div>
        )
    }
}
export default PaginationController
