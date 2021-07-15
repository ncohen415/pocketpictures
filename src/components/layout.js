import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

//Components

import "./layout.css"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import SEO from "./seo"

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  &.active {
    display: none;
  }
`

const Layout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const toggleMenu = () => setMobileNavOpen(!mobileNavOpen)

  return (
    <>
      <SEO />
      <Header mobileNavOpen={mobileNavOpen} toggleMenu={toggleMenu} />
      <LayoutContainer className={mobileNavOpen === true ? "active" : ""}>
        <main>{children}</main>
      </LayoutContainer>
      <Footer mobileNavOpen={mobileNavOpen} toggleMenu={toggleMenu} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
