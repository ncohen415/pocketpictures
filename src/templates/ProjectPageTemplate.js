import React from "react"
import { graphql } from "gatsby"

//Components
import SingleProject from "../components/Filter/single-project"

const ProjectPageTemplate = ({ data }) => {
  const project = data?.project?.edges[0]?.node || {}
  return (
    <>
      <SingleProject project={project} />
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    project: allWpProject(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          ProjectsACF {
            video
            videoGenre
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
`

export default ProjectPageTemplate
