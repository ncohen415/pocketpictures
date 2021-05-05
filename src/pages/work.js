import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

//Components
// import Project from "../components/WorkPage/project"

const WorkPageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Work = () => {
  const WorkImages = useStaticQuery(graphql`
    query WorkImageQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
      allWpMediaItem {
        edges {
          node {
            id
            title
            sourceUrl
          }
        }
      }
    }
  `)

  const ProjectImages = WorkImages.allFile.edges.map(({ node }) =>
    getImage(node.childImageSharp)
  )

  const WP = WorkImages.allWpMediaItem.edges.map(({ node }) => getImage(node))
  console.log(WP)
  return (
    <WorkPageContainer>
      {/* <Project
        src="https://player.vimeo.com/video/500614330"
        firstName="Chad"
        lastName="Douglass"
        description="Chad Douglas is a professional BMX rider in New York City, using the
        concrete jungle as his playground. This visual vignette renders his
        day-to-day on two wheels."
        img1={ProjectImages[21]}
        img2={ProjectImages[20]}
        img3={ProjectImages[22]}
      />

      <Project
        src="https://player.vimeo.com/video/279308126"
        firstName="Everett Noel Knives"
        description="CEverett Noel started making knives when he was 13—and hasn’t stopped since then. After graduating high school, he built a knife shop out of an old trailer and traveled around California. This is an elating glimpse into his life as a nomadic artisan."
        img1={ProjectImages[12]}
        img2={ProjectImages[13]}
        img3={ProjectImages[14]}
      />

      <Project
        src="https://player.vimeo.com/video/212984835"
        firstName="Chef"
        lastName="Tu"
        description="Chef Tu David Phu is a Vietnamese-American chef from Oakland, CA. This is an intimate portrait of his rooted-in-tradition cuisine, walking us through the reimagined elements and inventiveness of his craft—and how he’s turned it into an art form."
        img1={ProjectImages[12]}
        img2={ProjectImages[13]}
        img3={ProjectImages[14]}
      />
      <Project
        src="https://player.vimeo.com/video/500648794"
        firstName="Ovrkast."
        lastName="Face"
        description="Shot in Bed-Stuy and Oakland during lockdown, Face features Ovrkast. and Navy Blue meditating on working through self-doubt, trauma, and anxiety on the road to self-actualization.

        Featured on Rolling Stone, Hypebeast, and Complex mag."
        img1={ProjectImages[16]}
        img2={ProjectImages[17]}
        img3={ProjectImages[18]}
        img4={ProjectImages[19]}
        img5={ProjectImages[15]}
      /> */}
    </WorkPageContainer>
  )
}

export default Work
