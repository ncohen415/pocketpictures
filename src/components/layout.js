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
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

//Components

import "./layout.css"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import SEO from "./seo"

//Image
import Raymond from "../images/raymond.jpg"

const LayoutContainer = styled.div`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundImage: file(relativePath: { eq: "raymond.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1000, placeholder: BLURRED, formats: WEBP)
        }
      }
      wpPage {
        HeaderACF {
          headerHomeLink
          heading
          subHeading
        }
        FooterACF {
          eastCoast
          eastCoastAddress
          westCoast
          westCoastAddress
          footerImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: WEBP
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  `)

  const headerACF = data?.wpPage?.HeaderACF
  const footerACF = data?.wpPage?.FooterACF
  const image = getImage(data?.backgroundImage)

  return (
    <>
      <SEO />
      <BgImage image={image} style={{ height: "100%", width: "100%" }}>
        <Header customFields={headerACF} />
        <LayoutContainer>
          <main>{children}</main>
        </LayoutContainer>
        <Footer customFields={footerACF} />
      </BgImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
