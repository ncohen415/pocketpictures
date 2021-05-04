import React from "react"
import { graphql } from "gatsby"

import Home from "../components/Page-Components/Home/home-page"

const IndexPage = ({ data }) => {
  return <Home data={data} />
}

export const data = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Home Page" }) {
      title
      HomePageACF {
        reel
        email
        contactLink
      }
    }
  }
`
export default IndexPage
