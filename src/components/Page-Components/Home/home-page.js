import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../../seo"

import ProjectListing from "../../Filter/project-listing"

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  .home-page-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem;
    h1 {
      font-size: 60px;
      font-weight: 400;
      text-align: center;
      font-family: "Neue Haas Grotesk";
    }
    p {
      font-size: 3vh;
      opacity: 0.6;
    }
  }
  .filter-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-height: 50vh;
  }
  .email-us {
    position: relative;
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 5vh;
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

const Home = data => {
  const homeACF = data.data.wpPage.HomePageACF
  const ProjectsACF = data.data.wpPage.ProjectsACF

  return (
    <HomePageContainer>
      <SEO title="Home" />
      <div className="home-page-heading">
        <h1>{homeACF.heading}</h1>
      </div>
      <div class="filter-wrapper">
        <ProjectListing projects={ProjectsACF} />
      </div>
    </HomePageContainer>
  )
}

export default Home
