import React, {Component} from "react"
import Link from 'gatsby-link'
import MainMenu from "../menu/mainMenu"
import SocialMenu from "../social-menu/socialMenu"
import { globalHistory } from "@reach/router"
import "./header.css"
import LogoSvgBlack from "./../../images/svg/logo.svg"
import LogoSvgwhite from "./../../images/svg/logo-white.svg"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { darkTheme: true };
  }

  componentDidMount(){
    // We check wich path should have a dark theme **only for testing purpose**
    const currentLocation = window.location.pathname;
    if(currentLocation === '/'){
      this.setState({
        darkTheme: true,
      })
    }else{
      this.setState({
        darkTheme: false,
      })
    }
  }

  componentWillUnmount(){
    this.setState({
      darkTheme: true,
    })
  }

  render() {
      // We can detect the route change to set different variables based on that **only for testing purpose**
      globalHistory.listen(({ location }) => {
        if(location.pathname === '/'){
          this.setState({
            darkTheme: true,
          })
        }else{
          this.setState({
            darkTheme: false,
          })
        }
      })

      const title = this.props.siteTitle;
      return (
        <div className="header__wrapper">
          <div className="brand__wrapper">
            <Link to="/" className="brand__link">
              {
                this.state.darkTheme
                ?<LogoSvgwhite title={title} className="brand__svg__logo"></LogoSvgwhite>
                :<LogoSvgBlack title={title} className="brand__svg__logo"></LogoSvgBlack>
              }
            </Link>
          </div>
          <MainMenu theme={this.state.darkTheme ? '--dark' : '--light' }></MainMenu>
          <SocialMenu></SocialMenu>
        </div>
      )
  }
}


export default Header