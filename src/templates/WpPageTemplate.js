import React from "react"
import { graphql } from "gatsby"

//Pages
import Home from "../components/Page-Components/Home/home-page"
import About from "../components/Page-Components/About/about"
import Covid from "../components/Page-Components/Covid/covid"
import Process from "../components/Page-Components/Process/process"
import Merch from "../components/Page-Components/Merch/merch"
import Contact from "../components/Page-Components/Contact/contact"

const WpPageTemplate = ({ data }) => {
  const page = data?.allWpPage?.edges[0]?.node || {}
  if (page.slug === "/") {
    return <Home />
  } else if (page.slug === "about") {
    return <About />
  } else if (page.slug === "covid") {
    return <Covid />
  } else if (page.slug === "process") {
    return <Process />
  } else if (page.slug === "merch") {
    return <Merch />
  } else if (page.slug === "contact") {
    return <Contact />
  }
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export const data = graphql`
  query WpPageQuery($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`

export default WpPageTemplate
