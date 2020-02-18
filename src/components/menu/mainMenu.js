import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import "./menus.css"
const MainMenu = (props) => {
  // const data = useStaticQuery(graphql`
  //   query mainMenuQuery {
  //     allWordpressMenusMenusItems(filter: {slug: {eq: "YOUR MENU SLUG"}}) {
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={`menu__wrapper main__menu ${props.theme}`}>
      <ul >
        <li className={`list__element `}>
          <Link to="/blog" id="/blog">Blog</Link>
        </li>
      </ul>
    </div>  
  )
}
export default MainMenu

