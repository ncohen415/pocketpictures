import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProductContainer = styled.div`
  flex: 0 1 33.33333333%;
  margin: 2rem 0 2rem 0;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
  a {
    text-decoration: none;
    color: black;
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      .gatsby-image-wrapper {
        aspect-ratio: 1/1;
        width: 75%;
        margin-bottom: 1rem;
      }
      .detail-wrapper {
        width: 75%;
        display: flex;
        justify-content: space-between;
        .title {
          text-align: center;
          margin: 0;
          padding: 0;
          font-weight: 300;
        }
        .price {
          text-align: center;
          margin: 0;
          padding: 0;
        }
      }
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
      <Link to={`/product/${product.handle}`}>
        <div class="inner-wrapper">
          <GatsbyImage
            image={getImage(firstImage?.localFile)}
            alt="Product Image"
          />
          <div className="detail-wrapper">
            <p className="title">{product?.title}</p>
            <p className="price">${firstVariant?.price}</p>
          </div>
        </div>
      </Link>
    </ProductContainer>
  )
}

export default ProductsListingItem
