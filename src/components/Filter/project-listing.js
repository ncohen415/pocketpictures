import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

//components
import ProjectListingItem from "./project-listing-item"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 2rem 0 2rem 0;
    justify-content: center;
    li {
      display: flex;
      justify-content: center;
      min-width: 210px;
      margin: 0;
      padding: 0 2rem 0 2rem;
      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        font-family: "Neue Haas Grotesk Bold";
        font-size: 25px;
        z-index: 1;
        .strike-through {
          display: inline;
          position: relative;
          overflow: hidden;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 100%;
            bottom: 11px;
            background: #e84b4c;
            height: 4px;
            z-index: -1;
            transition-duration: 0.2s;
          }
          &:hover:after {
            right: 0;
          }
          &:focus:after {
            right: 0;
          }
          &:active:after {
            right: 0;
          }
        }
      }
    }
  }
  .projects-wrapper {
    width: 100%;
    height: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: baseline;
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
              productionDate
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
  const [filterValue, setFilterValue] = useState("")
  const [sortedProjects, setSortedProjects] = useState([])

  useEffect(() => {
    let listOfGenres = []
    function compare(a, b) {
      if (
        new Date(a.node.ProjectsACF.productionDate).getTime() <
        new Date(b.node.ProjectsACF.productionDate).getTime()
      )
        return 1
      if (
        new Date(b.node.ProjectsACF.productionDate).getTime() <
        new Date(a.node.ProjectsACF.productionDate).getTime()
      )
        return -1

      return 0
    }
    setSortedProjects(projects.sort(compare))

    //Get Genres
    sortedProjects.map(project => {
      let genre = project.node.ProjectsACF.videoGenre
      if (!listOfGenres.includes(genre)) {
        listOfGenres.push(genre)
      }
      setVideoGenres(listOfGenres)
    })
  }, [sortedProjects])

  return (
    <Container>
      <ul>
        {videoGenres.map(genre => {
          return (
            <li>
              <button onClick={e => setFilterValue(genre)} value={genre}>
                <div className="strike-through">{genre}</div>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="projects-wrapper">
        {sortedProjects.map(project => {
          if (project.node.ProjectsACF.videoGenre === filterValue) {
            return (
              <ProjectListingItem key={project.node.slug} project={project} />
            )
          }
        })}
      </div>
    </Container>
  )
}

export default ProjectListing
