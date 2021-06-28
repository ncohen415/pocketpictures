import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

//Components
import AddToCart from "../Cart/addtocart"

//Images
import ChevronDown from "../../images/chevron-down.svg"

const ProductPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 3rem 0 3rem;
  .image-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 0 3rem 0;
    .gatsby-image-wrapper {
      aspect-ratio: 1;
      height: 85vh;
    }
  }
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 0 3rem 0;
    .title-description {
      display: flex;
      flex: 0 1 50%;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 1rem 0 0;
    }
    .price-size {
      display: flex;
      flex: 0 1 50%;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      margin: 0 0 0 1rem;

      .custom-select-wrapper {
        position: relative;
        user-select: none;
        width: 100%;
        margin: 0 0 1.45rem 0;
        .custom-select {
          position: relative;
          display: flex;
          flex-direction: column;
          border-width: 0 2px 0 2px;
          border-style: solid;
          border-color: #000000;
          .select-trigger {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 22px;
            font-size: 15px;
            font-weight: 300;
            color: #000000;
            height: 60px;
            line-height: 60px;
            background: #ffffff;
            cursor: pointer;
            border-width: 2px 0 2px 0;
            border-style: solid;
            border-color: #000000;
            font-family: "Space Mono";
            .arrow {
              position: relative;
              height: 25px;
              width: 25px;
              margin: 0;
            }
          }
          .custom-options {
            position: absolute;
            display: block;
            top: 100%;
            left: 0;
            right: 0;
            border: 2px solid #000000;
            border-top: 0;
            background: #fff;
            transition: ease-in-out 0.2s;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            z-index: 2;
            &.open {
              opacity: 1;
              visibility: visible;
              pointer-events: all;
            }
            .custom-option {
              position: relative;
              display: block;
              padding: 0 22px 0 22px;
              font-size: 15px;
              font-weight: 300;
              color: #000000;
              line-height: 60px;
              cursor: pointer;
              transition: ease-in-out 0.2s;
              font-family: "Space Mono";
              &:hover {
                cursor: pointer;
                background-color: #ededed;
              }
              &.selected {
                color: #ffffff;
                background-color: #e84b4c;
              }
            }
          }
        }
      }
      button {
        width: 100%;
        height: 55px;
        margin: 0 0 1rem 0;
        font-family: "Space Mono";
      }
    }
  }
`

const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product?.variants[0])
  const [selectOpen, setSelectOpen] = useState(false)

  const toggleSelectOpen = () => {
    setSelectOpen(!selectOpen)
  }

  const variantSelected = variant => () => {
    setVariant(variant)
    setSelectOpen(false)
    console.log(selectedVariant)
  }

  console.log(selectedVariant)

  return (
    <ProductPageContainer>
      <div className="image-wrapper">
        <GatsbyImage
          image={getImage(product?.images[0]?.localFile)}
          alt="bruh"
        />
      </div>
      <div className="info-wrapper">
        <div className="title-description">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
        </div>

        <div className="price-size">
          <h1 className="price">${selectedVariant?.price}</h1>
          {selectedVariant?.title === "Default Title" ? (
            ""
          ) : (
            <div
              className="custom-select-wrapper"
              onClick={() => toggleSelectOpen()}
            >
              <div className="custom-select">
                <div className="select-trigger">
                  <span value={selectedVariant?.sku}>
                    {selectedVariant?.title}
                  </span>
                  <img className="arrow" src={ChevronDown} alt="Chevron Down" />
                </div>
                <div
                  className={
                    selectOpen === true
                      ? "custom-options open"
                      : "custom-options"
                  }
                  onChange={e => {
                    const selected = product?.variants?.filter(
                      variant => variant?.sku === e.target.value
                    )
                    setVariant(selected[0])
                  }}
                  value={selectedVariant?.sku}
                >
                  {product?.variants?.map(variant => (
                    <span
                      onClick={variantSelected(variant)}
                      className={
                        selectedVariant === variant
                          ? "custom-option selected"
                          : "custom-option"
                      }
                      value={variant?.sku}
                      key={variant?.id}
                    >
                      {variant?.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <AddToCart variantId={selectedVariant?.shopifyId} />
        </div>
      </div>
    </ProductPageContainer>
  )
}
export default ProductDetail
