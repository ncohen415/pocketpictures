import React from "react"
import styled from "styled-components"
import SEO from "../../seo"

const ContactPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 3rem 0 3rem;
  h1 {
    margin: 0;
    padding: 2rem;
  }
`

const Contact = () => {
  return (
    <ContactPageContainer>
      <SEO title="Contact" />
      <h1>(In Development)</h1>
    </ContactPageContainer>
  )
}

export default Contact
