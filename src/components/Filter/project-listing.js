import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { media } from "../mq"

//components
import ProjectListingItem from "./project-listing-item"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 2rem 0 2rem 0;
    justify-content: center;
    ${media.medium`flex-direction: row;`}
    li {
      display: flex;
      justify-content: center;
      min-width: 210px;
      margin: 1rem 0 1rem 0;
      padding: 0 2rem 0 2rem;
      ${media.medium`margin: 0;`}

      .strike-through {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        font-family: "Neue Haas Grotesk Bold";
        font-size: 25px;
        z-index: 1;
        display: inline;
        position: relative;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 12px;
          background: #e84b4c;
          height: 4px;
          z-index: -1;
          transition-duration: 0.2s;
          ${media.small`font-size: 35px;`}
          ${media.smallMedium`font-size: 45px;`}
        ${media.medium`font-size: 25px;`}
        }
        &.active:after {
          right: 0;
        }
        &:hover:after {
          right: 0;
        }
      }
    }
  }
  .projects-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: baseline;
    margin-bottom: 4rem;
    ${media.medium`flex-direction: row;`}
  }
`

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allWpProject {
        edges {
          node {
            title
            slug
            ProjectsACF {
              video
              videoGenre
              aspectRatioHeight
              aspectRatioWidth
              description
              featured
              thumbnailImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      formats: WEBP
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      quality: 100
                    )
                  }
                }
              }
              stills {
                projectStills {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        formats: WEBP
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        quality: 100
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allWpProject.edges
  const [videoGenres, setVideoGenres] = useState([])
  const [filterValue, setFilterValue] = useState("Featured")
  const [featuredProjects, setFeaturedProjects] = useState([])

  useEffect(() => {
    let listOfGenres = ["Featured"]
    let listOfFeaturedProjects = []

    //Get Genres
    projects.map(project => {
      let featuredProject = project.node.ProjectsACF.featured
      let genre = project.node.ProjectsACF.videoGenre

      if (featuredProject === true) {
        genre = "Featured"
        listOfFeaturedProjects.push(project)
        setFeaturedProjects(listOfFeaturedProjects)
      }

      if (!listOfGenres.includes(genre)) {
        listOfGenres.push(genre)
      }

      setVideoGenres(listOfGenres)
    })
  }, [projects])

  return (
    <Container>
      <ul>
        {videoGenres.map(genre => {
          return (
            <li>
              <button
                onClick={e => setFilterValue(genre)}
                value={genre}
                className={
                  filterValue === genre
                    ? "strike-through active"
                    : "strike-through"
                }
              >
                {genre}
              </button>
            </li>
          )
        })}
      </ul>
      <div className="projects-wrapper">
        {filterValue === "Featured"
          ? featuredProjects.map(project => {
              return (
                <ProjectListingItem key={project.node.slug} project={project} />
              )
            })
          : projects.map(project => {
              if (filterValue === project.node.ProjectsACF.videoGenre) {
                return (
                  <ProjectListingItem
                    key={project.node.slug}
                    project={project}
                  />
                )
              }
            })}
      </div>
    </Container>
  )
}

export default ProjectListing
