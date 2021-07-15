import * as React from "react"
import styled from "styled-components"
import SEO from "../../seo"
import { media } from "../../mq"

//Components
import ProjectListing from "../../Filter/project-listing"

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  .home-page-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 2rem 0;
    ${media.medium`padding: 5rem;`}
    h1 {
      font-size: 30px;
      font-weight: 400;
      text-align: center;
      font-family: "Neue Haas Grotesk";
      ${media.small`font-size: 45px;`}
      ${media.smallMedium`font-size: 60px;`}
    }
  }
  .filter-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-height: 50vh;
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
      <div className="filter-wrapper">
        <ProjectListing projects={ProjectsACF} />
      </div>
    </HomePageContainer>
  )
}

export default Home
