import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../mq"

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
  ${media.smallMedium`padding: 0 3rem 0 3rem;`}
  .image-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    .gatsby-image-wrapper {
      aspect-ratio: 1;
      ${media.smallMedium`height: 70vh;`}
    }
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title-price {
      display: flex;
      flex: 0 1 50%;
      justify-content: space-between;
      h1 {
        font-family: "Neue Haas Grotesk Medium";
      }
    }
    .description-shop {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      ${media.smallMedium`flex-direction: row;`}
      .description {
        display: flex;
        flex: 0 1 60%;
        width: 100%;
        ${media.smallMedium`margin: 0 0.75rem 0 0;`}
        p {
          font-family: "Neue Haas Grotesk";
        }
      }
      .variant-addtocart {
        display: flex;
        flex-direction: column;
        flex: 0 1 40%;
        width: 100%;
        margin-bottom: 4rem;
        ${media.smallMedium`margin: 0 0 0 0.75rem;`}
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
              font-size: 18px;
              font-weight: 300;
              color: #000000;
              height: 60px;
              line-height: 60px;
              background: #ffffff;
              cursor: pointer;
              border-width: 2px 0 2px 0;
              border-style: solid;
              border-color: #000000;
              font-family: "Neue Haas Grotesk";
              ${media.xsmall`font-size: 20px;`}
              ${media.large`font-size: 18px;`}
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
                font-family: "Neue Haas Grotesk";
                ${media.xsmall`font-size: 20px;`}
                ${media.medium`font-size: 15px;`}
                &:hover {
                  cursor: pointer;
                  background-color: #ededed;
                }
                &.selected {
                  color: #ffffff;
                  background-color: #e84b4c;
                }
              }
              .custom-option-unavailable {
                position: relative;
                display: block;
                padding: 0 22px 0 22px;
                font-size: 15px;
                font-weight: 300;
                color: #000000;
                line-height: 60px;
                cursor: pointer;
                transition: ease-in-out 0.2s;
                font-family: "Neue Haas Grotesk";
                opacity: 0.3;
                ${media.xsmall`font-size: 20px;`}
                ${media.medium`font-size: 15px;`}
                &:hover {
                  cursor: pointer;
                }
              }
            }
          }
        }
        .addtocart {
          width: 100%;
          height: 60px;
          font-family: "Neue Haas Grotesk";
          .unavailable-wrapper {
            height: 60px;
            background-color: white;
            color: black;
            border: 2px solid black;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            p {
              margin: 0;
              padding: 0;
              font-size: 18px;
            }
          }
        }
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

  console.log(product)

  return (
    <ProductPageContainer>
      <div className="image-wrapper">
        <GatsbyImage
          image={getImage(product?.images[0]?.localFile)}
          alt="Product Image"
        />
      </div>

      <div className="info-wrapper">
        <div className="title-price">
          <h1>{product?.title}</h1>
          <h1 className="price">${selectedVariant?.price}</h1>
        </div>

        <div className="description-shop">
          <div className="description">
            <p>{product?.description}</p>
          </div>
          <div className="variant-addtocart">
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
                    <img
                      className="arrow"
                      src={ChevronDown}
                      alt="Chevron Down"
                    />
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
                    {product?.variants?.map(variant => {
                      if (variant.availableForSale === true) {
                        return (
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
                        )
                      } else {
                        return (
                          <span
                            className="custom-option-unavailable"
                            // onClick={variantSelected(variant)}
                            value={variant?.sku}
                            key={variant?.id}
                          >
                            {variant?.title} (Unavailable)
                          </span>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            <div className="addtocart">
              <AddToCart variantId={selectedVariant?.shopifyId} />
            </div>
          </div>
        </div>
      </div>
    </ProductPageContainer>
  )
}
export default ProductDetail
