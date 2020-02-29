import React from "react"
import PropTypes from "prop-types"

import { purple } from '@material-ui/core/colors'

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: purple[700],
      width: `100vw`,
      position: `fixed`,
      bottom: 0
    }}
  >
    <div
      style={{
        color: `white`,
        textAlign: `center`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.85rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()} {siteTitle}
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
