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
        email
        contactLink
        heading
      }
    }
  }
`
export default IndexPage
