import React from "react"
import styled from "styled-components"

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  .video-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 2rem 0 2rem 0;
  }
  .project-info {
    display: flex;
    align-items: center;
    padding: 2rem 0 2rem 0;
    .title {
      flex: 0 1 50%;
      padding: 0 2rem 0 0;
    }
    .description {
      flex: 0 1 50%;
      padding: 0 0 0 2rem;
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
            width: customFields?.aspectRatioWidth < 16 ? "70%" : "100%",
          }}
          dangerouslySetInnerHTML={{ __html: customFields?.video }}
        />
      </div>
      <div class="project-info">
        <h1 className="title">{project?.title}</h1>
        <p className="description">{customFields?.description}</p>
      </div>
    </ProjectContainer>
  )
}

export default SingleProject
