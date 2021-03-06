import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../seo"
import { media } from "../../mq"

const AboutPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  .copy-wrapper {
    h1 {
      font-size: 30px;
      font-weight: 400;
      text-align: center;
      font-family: "Neue Haas Grotesk";
      ${media.small`font-size: 45px;`}
      ${media.smallMedium`font-size: 60px; padding: 5rem;`}
    }
  }
  .email-wrapper {
    width: 100%;
    h2 {
      font-size: 45px;
      font-weight: 400;
      text-align: center;
      font-family: "Neue Haas Grotesk Bold";
      ${media.smallMedium`font-size: 60px;`}
      .strike-through {
        display: inline;
        position: relative;
        overflow: hidden;
        z-index: 1;
        color: inherit;
        text-decoration: none;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 21px;
          background: #e84b4c;
          height: 5px;
          z-index: -1;
          transition-duration: 0.2s;
          ${media.smallMedium`bottom: 27px; height: 7px;`}
        }
        &:hover:after {
          right: 0;
        }
        &.active:after {
          right: 0;
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      wpPage(title: { eq: "About" }) {
        title
        AboutPageACF {
          aboutPageCopy
          contactUs
        }
      }
    }
  `)
  const aboutACF = data.wpPage.AboutPageACF
  return (
    <AboutPageContainer>
      <SEO title="About" />
      <div className="copy-wrapper">
        <h1>
          <div dangerouslySetInnerHTML={{ __html: aboutACF.aboutPageCopy }} />
        </h1>
      </div>
      <br />
      <br />
      <div className="email-wrapper">
        <h2>
          <a href="/contact" className="strike-through">
            {aboutACF.contactUs}
          </a>
        </h2>
      </div>
      <br />
      <br />
    </AboutPageContainer>
  )
}

export default About
