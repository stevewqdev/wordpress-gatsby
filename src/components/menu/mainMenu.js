import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import "./menus.css"

const MainMenu = (props) => {
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
            name
            wordpress_id
            items{
              title
              url
              classes
              wordpress_id
            }
          }
        }
      }
    }
  `)

  var menuItems = false; 
  var menuId = false; 
  if(data.allWordpressMenusMenusItems){
    menuItems = data.allWordpressMenusMenusItems.edges[0].node.items;
    menuId  = data.allWordpressMenusMenusItems.edges[0].node.wordpress_id;
  }
  
  return (
    <div className={`menu__wrapper main__menu menu-${menuId} ${props.theme}`}>
      <ul >
      {
        menuItems
        ? menuItems.map((item, index) => 
            <li key={item.wordpress_id}  className={`list__element ` + item.classes}>
              <Link to={item.url}>
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

