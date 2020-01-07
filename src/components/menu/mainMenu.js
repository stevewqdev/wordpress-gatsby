import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import "./menus.css"
const MainMenu = () => {
    /* ===================IMPORTANT======================
    For this menu to work you need to create a menu
    with the slug name of main-menu or you can change
    the query to call your current menu
    ===================================================
  */
  const data = useStaticQuery(graphql`
    query mainMenuQuery {
      allWordpressMenusMenusItems(filter: {slug: {eq: "main-menu"}}) {
        edges {
          node {
            id
            name
            slug
            items{
              title
              slug
              url
              classes
            }
          }
        }
      }
    }
  `)

  var menuItems = false; 
  var menuName = false; 
  if(data.allWordpressMenusMenusItems){
    menuItems = data.allWordpressMenusMenusItems.edges[0].node.items;
    menuName  = data.allWordpressMenusMenusItems.edges[0].node.slug;
  }
  
  return (
    <div className={`menu__wrapper ` +  menuName}>
      <ul >
      {
        menuItems
        ? menuItems.map((item) => 
            <li key={item.slug} className={`list__element ` + item.classes}>
              <Link to={item.url.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}` , "")}>
                {item.title}
              </Link>
            </li>
          )
        : ''
      } 
      </ul>
    </div>  

  )
}
export default MainMenu

