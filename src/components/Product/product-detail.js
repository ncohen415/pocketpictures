import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

//Components
import AddToCart from "../Cart/AddToCart"

const ProductPageContainer = styled.div`
  display: flex;
  margin: 0 2.5rem 4rem 2.5rem;
  .image-wrapper {
    flex: 1 50%;
    img {
      width: 70%;
    }
  }
  .info-wrapper {
    flex: 1 50%;
    .title-price {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      h1 {
        margin: 0 0 1vh 0;
        padding: 0;
        font-size: 6vh;
      }
      p {
        margin: 0 0 5vh 0;
        padding: 0;
        font-size: 4vh;
      }
    }
    .description-wrapper {
      p {
        font-size: 2.2vh;
        line-height: 1.4;
      }
    }
    .cart-selector {
      display: flex;
      button {
        flex: 1 50%;
        margin: 0 0.5rem 0 0;
        max-width: 350px;
      }
      select {
        flex: 1 50%;
        margin: 0 0 0 0.5rem;
        max-width: 350px;
        cursor: pointer;
        text-align: center;
        font-size: 2.5vh;
        line-height: 2;
        font-weight: 700;
        background-color: white;
        color: black;
        border: 2px solid black;
        border-radius: 2px;
        padding: 1vh 2vh;
        outline: none;
      }
    }
  }
`

export default function ProductDetail({ product }) {
  const [selectedVariant, setVariant] = useState(product?.variants[0])
  return (
    <ProductPageContainer>
      <div className="image-wrapper">
        <GatsbyImage
          image={getImage(product?.images[0]?.localFile)}
          alt="bruh"
        />
      </div>
      <div className="info-wrapper">
        <div className="title-price">
          <h1>{product?.title}</h1>
          <p>${selectedVariant?.price}</p>
        </div>

        <div className="description-wrapper">
          <p>{product?.description}</p>
        </div>
        <div className="cart-selector">
          <AddToCart variantId={selectedVariant?.shopifyId} />
          <select
            onChange={e => {
              const selected = product?.variants?.filter(
                variant => variant?.sku === e.target.value
              )
              setVariant(selected[0])
            }}
            value={selectedVariant?.sku}
          >
            {product?.variants?.map(variant => (
              <option value={variant?.sku} key={variant?.id}>
                {variant?.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </ProductPageContainer>
  )
}
