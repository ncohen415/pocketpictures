import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { media } from "../mq"

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 4rem;
  ${media.medium`margin-bottom: 0;`}
  .video-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
    ${media.medium`padding: 2rem 0 2rem 0; margin-bottom: 0;`}
  }
  .project-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.medium`padding: 2rem 0 2rem 0; flex-direction: row;`}
    .title {
      flex: 0 1 50%;
      text-align: center;
      ${media.medium`padding: 0 2rem 0 0; text-align: left;`}
    }
    .description {
      flex: 0 1 50%;
      text-align: center;
      ${media.medium`padding: 0 2rem 0 0; text-align: left;`}
    }
  }
  .project-stills-wrapper {
    width: 100%;
    .stills-inner-wrapper {
      column-count: 3;
      column-gap: 0.4rem;
      .image-wrapper {
      }
    }
  }
`

const SingleProject = ({ project }) => {
  const customFields = project?.ProjectsACF
  return (
    <ProjectContainer>
      <div class="video-wrapper">
        <div
          className="video"
          style={{
            width: customFields?.aspectRatioWidth < 16 ? "75%" : "100%",
          }}
          dangerouslySetInnerHTML={{ __html: customFields?.video }}
        />
      </div>
      <div class="project-info">
        <h1 className="title">{project?.title}</h1>
        <p className="description">{customFields?.description}</p>
      </div>
      <div className="project-stills-wrapper">
        <div class="stills-inner-wrapper">
          {customFields?.stills?.map(still => {
            return (
              <div class="image-wrapper">
                <GatsbyImage image={getImage(still.projectStills.localFile)} />
              </div>
            )
          })}
        </div>
      </div>
    </ProjectContainer>
  )
}

export default SingleProject
