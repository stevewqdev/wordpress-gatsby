import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import "./menus.css"
const MainMenu = (props) => {
  /* ===================IMPORTANT======================
  On the next query you need to add your menu slug so
  you can query the items for your menu, don't forget
  to change the text YOUR MENUE SLUG to the current 
  menu slug you want to retrieve.
  ===================================================*/
  // const data = useStaticQuery(graphql`
  //   query mainMenuQuery {
  //     allWordpressMenusMenusItems(filter: {slug: {eq: "YOUR MENU SLUG"}}) {
  //       edges {
  //         node {
  //           name
  //           wordpress_id
  //           items{
  //             title
  //             url
  //             classes
  //             wordpress_id
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  /* === The next variables are set to get the items 
  from the menu query
  ===================================================*/
  // var menuItems = false; 
  // var menuId = false; 
  // if(data.allWordpressMenusMenusItems){
  //   menuItems = data.allWordpressMenusMenusItems.edges[0].node.items;
  //   menuId  = data.allWordpressMenusMenusItems.edges[0].node.wordpress_id;
  // }
  return (
    <div className={`menu__wrapper main__menu ${props.theme}`}>
      <ul >
        <li className={`list__element `}>
          <Link to="/blog" id="/blog/">Blog</Link>
        </li>
        {
        /* {
          menuItems
          ? menuItems.map((item, index) => 
              <li key={item.wordpress_id}  className={`list__element ` + item.classes}>
                <Link to={item.url} id={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          : ''
        }*/
        }
      </ul>
    </div>  
  )
}
export default MainMenu

