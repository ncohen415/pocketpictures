/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

//Components

import "./layout.css"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import SEO from "./seo"

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <Header />
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
