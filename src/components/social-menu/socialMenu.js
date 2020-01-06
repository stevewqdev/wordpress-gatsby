
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SocialMenu = ({  }) => {
  /* ===================IMPORTANT======================
    For this menu to work you need to create a group
    of custom fields for the options section and add 
    it to the query, usually those are under the field 
    node { options }

    This menu uses a repeater field with two fields
    1- A select field for the social network name called
    network_channel 
    2- A text field for the network link called 
    network_link
    ===================================================
  */
  const data = useStaticQuery(graphql`
    query socialMenuQuery {
      allWordpressAcfOptions {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  
  var menuItems = false;
  if(data.allWordpressAcfOptions.edges[0].node.options){
    menuItems = data.allWordpressAcfOptions.edges[0].node.options.social_network
  }
  
  return (
    <div className="social__menu">
      <ul >
      {
        menuItems
        ? menuItems.map((item, index) => 
            <li key={item.network_channel-index} className={`social__menu__tem`}>
              <a href={item.network_link} target="_blank" rel="noopener noreferrer">
                <i class={`fab fa-`+item.network_channel}>{item.network_channel}</i>
              </a>
            </li>
          )
        : ''
      } 
      </ul>
    </div>  

  )
}
export default SocialMenu

