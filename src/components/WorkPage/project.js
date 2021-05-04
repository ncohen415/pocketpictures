import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ProjectContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 0 0 5rem 0;
  .video-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    margin-bottom: 5rem;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }
  .description-wrapper {
    display: flex;
    justify-content: space-between;
    .name {
      flex: 1 50%;
    }
    .description {
      flex: 1 50%;
    }
  }
  .images-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .wide {
      flex: 2 66%;
      img {
        padding: 2rem 0.5rem 2rem 0.5rem;
      }
    }
    .skinny {
      flex: 1 16.5%;
      img {
        padding: 2rem 0.5rem 2rem 0.5rem;
      }
    }
    .medium {
      img {
        padding: 2rem 0.5rem 2rem 0.5rem;
      }
    }
    div {
      flex: 1 33%;
      height: 365px;
      img {
        padding: 2rem 0.5rem 2rem 0.5rem;
      }
    }
  }
`

const Project = (props, { WorkImages }) => {
  return (
    <ProjectContainer>
      <div className="video-wrapper">
        <iframe
          title="vimeo-player"
          src={props.src}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="description-wrapper">
        <div className="name">
          <h1>
            {props.firstName} <br /> {props.lastName}
          </h1>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="images-wrapper">
        <GatsbyImage image={props.img1} />
        <GatsbyImage image={props.img2} />
        <GatsbyImage image={props.img3} />
        <div className="wide">
          <GatsbyImage image={props?.img4} />
        </div>
        <GatsbyImage image={props?.img5} />
        <GatsbyImage image={props?.img6} />
      </div>
    </ProjectContainer>
  )
}

export default Project
