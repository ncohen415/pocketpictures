import React from "react"
import { graphql } from "gatsby"

//Pages
import Home from "../components/Page-Components/Home/home-page"
import About from "../components/Page-Components/About/about"
// import Covid from "../components/Page-Components/Covid/covid"
// import Process from "../components/Page-Components/Process/process"
import Shop from "../components/Page-Components/Shop/shop"
import Contact from "../components/Page-Components/Contact/contact"

const WpPageTemplate = ({ data }) => {
  const page = data?.allWpPage?.edges[0]?.node || {}
  if (page.slug === "/") {
    return <Home />
  } else if (page.slug === "about") {
    return <About />
  } else if (page.slug === "shop") {
    return <Shop />
  } else if (page.slug === "contact") {
    return <Contact />
  }

  // else if (page.slug === "covid") {
  //   return <Covid />
  // }
  // else if (page.slug === "process") {
  //   return <Process />
  // }
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
