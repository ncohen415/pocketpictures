import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectContainer = styled.div`
  display: flex;
  flex: 0 1 33.33%;
  padding: 1rem;
  transition: 0.2s;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    .project-inner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .thumbnail-wrapper {
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
          width: 100%;
        }
      }
      .details-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
          margin-bottom: 0.5rem;
          font-family: "Space Mono";
          font-size: 13px;
        }
        h4 {
          text-align: center;
          margin: 0;
          font-family: "Adobe Garamond";
        }
      }
    }
  }
`

const ProjectListingItem = ({ project }) => {
  const thumbnail = project.node.ProjectsACF.thumbnailImage.localFile
  const genre = project.node.ProjectsACF.videoGenre
  const title = project.node.title

  return (
    <ProjectContainer>
      <Link to={`/project/${project.node.slug}`}>
        <div class="project-inner-wrapper">
          <div class="thumbnail-wrapper">
            <GatsbyImage
              image={getImage(thumbnail)}
              alt="Project Thumbnail Image"
            />
          </div>
          <div class="details-wrapper">
            <p>{genre}</p>
            <h4>{title}</h4>
          </div>
        </div>
      </Link>
    </ProjectContainer>
  )
}

export default ProjectListingItem
