import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProductContainer = styled.div`
  flex: 0 1 33.33%;
  a {
    .image-wrapper {
      .gatsby-image-wrapper {
      }
    }
    .detail-wrapper {
      h3 {
      }
      p {
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
      <Link to={`/product/${product.handle}`} style={{ display: "block" }}>
        <div class="image-wrapper">
          <GatsbyImage
            image={getImage(firstImage?.localFile)}
            alt="Product Image"
          />
        </div>
        <div className="detail-wrapper">
          <h3>{product?.title}</h3>
          <p>${firstVariant?.price}</p>
        </div>
      </Link>
    </ProductContainer>
  )
}

export default ProductsListingItem
