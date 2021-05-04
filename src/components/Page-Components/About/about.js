import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

//Components
import Staff from "./staff"
import Talent from "./talent"
import Client from "./client"

//Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// import ChevronRight from "../images/double-chevron-right.svg"

const AboutPageContainer = styled.div`
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
      .work-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1 30%;
        h3 {
          font-size: 4vh;
          display: flex;
          align-items: center;
          a {
            color: rgb(237, 64, 64);
            text-decoration: none;
            transition: 0.2s ease-in-out;
            &:hover {
              color: black;
            }
          }
          .style-svg {
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
  .description-container {
    width: 100%;
    .description-wrapper {
      width: 70%;
      p {
        font-size: 2.5vh;
        line-height: 1.2;
      }
      .highlight {
        color: rgb(237, 64, 64);
      }
    }
  }
  .email-us {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    h3 {
      font-size: 4vh;
      &:hover {
        text-decoration: underline;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
  .talent-container {
    width: 100%;
    .talent-section {
      display: flex;
      width: 100%;
    }
    .staff {
      width: 33%;
      h3 {
        font-size: 3.7vh;
      }
    }
    .talent {
      width: 33%;
      h3 {
        font-size: 3.7vh;
      }
    }
  }
  .selected-clients-container {
    width: 100%;
    h3 {
      font-size: 3.7vh;
    }
    .clients-wrapper {
      display: flex;
      .slick-slider {
        width: 100%;
        .slick-list {
          .slick-track {
            .slick-slide {
              div {
                .client {
                  display: flex !important;
                  flex-direction: column;
                  align-items: center !important;
                  padding: 0 1rem 0 1rem !important;
                  outline: none;
                  img {
                    padding: 0;
                    margin: 0;
                  }
                }
              }
            }
          }
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
          aboutPageHeading
          aboutPageBlurb
          aboutPageSubHeading
          fortunatelyWereBoth
          contactLink
          staffHeading
          talentHeading
          workPageLink
          email
          staff {
            staffName
            staffRole
            portfolioLink {
              url
            }
          }
          talent {
            talentRole
            talentName
            portfolioLink {
              url
            }
          }
          selectedClientsHeading
          selectedClients {
            clientName
            clientWebsite {
              url
            }
            image {
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
    }
  `)
  const aboutACF = data?.wpPage?.AboutPageACF
  return (
    <AboutPageContainer>
      <section className="heading-container">
        <div className="heading-wrapper">
          <div className="description-wrapper">
            <h1>{aboutACF.aboutPageHeading}</h1>
          </div>
          <div className="work-wrapper">
            <h3>{aboutACF.aboutPageBlurb}</h3>
            <h3>
              <Link to="/work">{aboutACF.workPageLink}</Link>
              {/* REMEMBER TO PUT DOUBLE CHEVRON BACK HERE */}
            </h3>
          </div>
        </div>
      </section>
      <br />
      <section className="description-container">
        <div className="description-wrapper">
          <div
            dangerouslySetInnerHTML={{ __html: aboutACF.aboutPageSubHeading }}
          />
          <span className="highlight">{aboutACF.fortunatelyWereBoth}</span>
        </div>
      </section>
      <br />
      <div className="email-us">
        <h3>
          <Link to="/">{aboutACF.contactLink}</Link>
        </h3>
      </div>
      <br />
      <section className="talent-container">
        <div className="talent-section">
          <div className="staff">
            <h3>{aboutACF.staffHeading}</h3>
            <Staff aboutACF={aboutACF} />
          </div>
          <div className="talent">
            <h3>{aboutACF.talentHeading}</h3>
            <Talent aboutACF={aboutACF} />
          </div>
        </div>
      </section>
      <br />
      <section className="selected-clients-container">
        <h3>{aboutACF.selectedClientsHeading}</h3>
        <div className="clients-wrapper">
          <Slider
            dots={false}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={3}
            autoplay={true}
            speed={2000}
            autoplaySpeed={5000}
            pauseOnHover={true}
          >
            {aboutACF.selectedClients.map(client => {
              return <Client client={client} />
            })}
          </Slider>
        </div>
      </section>
      <br />
    </AboutPageContainer>
  )
}

export default About
