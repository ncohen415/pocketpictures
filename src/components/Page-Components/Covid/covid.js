import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../../seo"

const CovidPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 3rem 0 3rem;
  .heading-container {
    width: 100%;
    .heading-wrapper {
      display: flex;
      width: 100%;
      padding-top: 2.5rem;
      .description-wrapper {
        flex: 1 70%;
        h1 {
          font-size: 8vh;
        }
      }
      .process-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1 30%;
        h3 {
          font-size: 4vh;
        }
      }
    }
  }
  .covid-description {
    display: flex;
    width: 100%;
    .covid-description-left {
      padding: 0 2.5rem 0 0;
      width: 50%;
      p {
        font-size: 2.5vh;
        line-height: 3.5vh;
      }
    }
    .covid-description-right {
      padding: 0 0 0 2.5rem;
      width: 50%;
      p {
        font-size: 2.5vh;
        line-height: 3.5vh;
      }
      h3 {
        font-size: 3.5vh;
      }
      .email-us {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-start;
        h3 {
          font-size: 3.5vh;
          &:hover {
            text-decoration: underline;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
`

const Covid = () => {
  const data = useStaticQuery(graphql`
    query CovidPageQuery {
      wpPage(title: { eq: "Covid" }) {
        title
        CovidPageACF {
          covidPageContent
          contactLink
          covidPageBlurb
          covidPageHeading
          imageSubHeader
          imageSubText
          processPageLink
          email
          covidPageImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)

  const covidACF = data?.wpPage?.CovidPageACF
  const image = covidACF?.covidPageImage.localFile

  return (
    <CovidPageContainer>
      <SEO title="Covid-19" />
      <section className="heading-container">
        <div className="heading-wrapper">
          <div className="description-wrapper">
            <h1>{covidACF.covidPageHeading}</h1>
          </div>
          <div className="process-wrapper">
            <h3>{covidACF.covidPageBlurb}</h3>
            <h3>
              <Link to="/process">{covidACF.processPageLink}</Link>
            </h3>
          </div>
        </div>
      </section>
      <section className="covid-description">
        <div
          dangerouslySetInnerHTML={{ __html: covidACF.covidPageContent }}
          className="covid-description-left"
        />
        <div className="covid-description-right">
          <div className="image-wrapper">
            <GatsbyImage image={getImage(image)} />
          </div>
          <div className="description-wrapper">
            <p>{covidACF.imageSubText}</p>
          </div>
          <div className="sub-heading-wrapper">
            <h3>{covidACF.imageSubHeader}</h3>
          </div>
          <div className="email-us">
            <h3>
              <a href={covidACF.email}>{covidACF.contactLink}</a>
            </h3>
          </div>
        </div>
      </section>
    </CovidPageContainer>
  )
}

export default Covid
