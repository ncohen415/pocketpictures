import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
  a {
    margin: 0 0 1rem 0;
    color: inherit;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    height: 35vh;
    &:hover {
      box-shadow: 7px -7px 1px rgba(0, 0, 0, 0.7),
        -7px 7px 1px rgba(237, 64, 64, 0.9);
    }
    img {
      height: 35vh;
      width: 35vh;
    }
  }
  .detail-wrapper {
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 2.5vh;
      padding: 0;
      margin: 1vh 0 0.5vh 0;
    }
    p {
      font-size: 2vh;
      padding: 0;
      margin: 0.5vh 0 0.5vh 0;
    }
  }
`

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <ProductContainer>
      <Link to={`/product/${product.handle}`} style={{ display: "block" }}>
        <GatsbyImage image={getImage(firstImage?.localFile)} alt="bruh" />
      </Link>
      <div className="detail-wrapper">
        <h3>{product?.title}</h3>
        <p>${firstVariant?.price}</p>
      </div>
    </ProductContainer>
  )
}

export default ProductsListingItem
