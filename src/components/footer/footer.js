//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
    <>
      <footer className="footer__wrapper">
        <div className="footer__content container-fluid__base">
          <p>© {new Date().getFullYear()}, Powered with {` `} <a href="https://www.gatsbyjs.org">Gatsby + Wordpress</a></p>
        </div>
      </footer>
    </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
