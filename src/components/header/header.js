import React, {Component} from "react"
import Link from 'gatsby-link'
import MainMenu from "../menu/mainMenu"
import SocialMenu from "../social-menu/socialMenu"
import "./header.css"

class Header extends Component {
  render() {
      const title = this.props.siteTitle;
      return (
        <div className="header__wrapper">
          <div className="brand__wrapper">
            <Link to="/" className="brand__link">
              <h1 className="brand__name" dangerouslySetInnerHTML={{__html: title}}/>
            </Link>
          </div>
          <MainMenu></MainMenu>
          <SocialMenu></SocialMenu>
        </div>
      )

  }
}


export default Header