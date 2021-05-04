import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../seo"

const ProcessPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 3rem 0 3rem;
  .heading-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      font-size: 9vh;
    }
    h3 {
      font-size: 4vh;
    }
  }
  .process-description {
    display: flex;
    width: 100%;
    .process-description-left {
      width: 50%;
      padding: 0 1.25rem 0 0;
      .description {
        h2 {
          font-size: 5vh;
        }
        p {
          font-size: 2.5vh;
          line-height: 3.5vh;
        }
      }
    }
    .process-description-right {
      width: 50%;
      padding: 0 0 0 1.25rem;
      .description {
        h2 {
          font-size: 5vh;
        }
        p {
          font-size: 2.5vh;
          line-height: 3.5vh;
        }
      }
    }
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
`

const Process = () => {
  const data = useStaticQuery(graphql`
    query ProcessPageQuery {
      wpPage(title: { eq: "Process" }) {
        title
        processPageACF {
          processPageHeading
          processPageSubHeading
          creativeHeading
          creativeContent
          treatmentPlanningHeading
          treatmentPlanningContent
          productionPostHeading
          productionPostContent
          deliveryHeading
          deliveryContent
          processBlurb
          contactLink
          email
        }
      }
    }
  `)

  const processACF = data?.wpPage?.processPageACF

  return (
    <ProcessPageContainer>
      <SEO title="Process" />
      <section className="heading-container">
        <h1 className="page-heading">{processACF.processPageHeading}</h1>
        <h3 className="page-sub-heading">{processACF.processPageSubHeading}</h3>
      </section>
      <section className="process-description">
        <div className="process-description-left">
          <div className="description">
            <h2>{processACF.creativeHeading}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: processACF.creativeContent }}
            />
          </div>
          <div className="description">
            <h2>{processACF.treatmentPlanningHeading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: processACF.treatmentPlanningContent,
              }}
            />
          </div>
          <div className="description">
            <h2>{processACF.productionPostHeading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: processACF.productionPostContent,
              }}
            />
          </div>
        </div>
        <div className="process-description-right">
          <div className="description">
            <h2>{processACF.deliveryHeading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: processACF.deliveryContent,
              }}
            />
          </div>
          <h2>{processACF.processBlurb}</h2>
          <div className="email-us">
            <h3>
              <a href={processACF.email}>{processACF.contactLink}</a>
            </h3>
          </div>
        </div>
      </section>
    </ProcessPageContainer>
  )
}

export default Process
