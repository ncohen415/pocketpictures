import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleClient = styled.div`
  padding: 0 1rem 0 1rem;
  outline: none;
  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    cursor: pointer;
    img {
      padding: 0;
      margin: 0;
    }
  }
`

const Client = ({ client }) => {
  const image = client.image.localFile
  return (
    <SingleClient>
      <a target="_blank" href={client.clientWebsite.url}>
        <GatsbyImage image={getImage(image)} />
        <small>{client.clientName}</small>
      </a>
    </SingleClient>
  )
}

export default Client
