import React, { Component } from "react"
import "./buttons.css"
class ExternalButton extends Component {
    render() {
        const props = this.props; 
        return (
            <button tabIndex={-1}  className={`btn-main ${props.buttonClass}`}>
                <a  href={props.redirectionLink} target={'_BLANK'} rel="noopener noreferrer">{props.buttonText}</a>
            </button>
        )
    }
}
export default ExternalButton