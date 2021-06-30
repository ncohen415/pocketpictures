import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductsListingItem from "./product-listing-item"
import styled from "styled-components"
import { media } from "../mq"

const ProductListingContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${media.smallMedium`flex-wrap: wrap; flex-direction: row;`}
`

const ProductsListing = () => {
  const { products } = useStaticQuery(graphql`
    query ProductsListingQuery {
      products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
        edges {
          node {
            title
            id
            handle
            description
            productType
            variants {
              shopifyId
              title
              price
              availableForSale
            }
            images {
              id
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    formats: WEBP
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProductListingContainer>
      {products.edges.map(({ node: product }) => (
        <ProductsListingItem key={product?.id} product={product} />
      ))}
    </ProductListingContainer>
  )
}

export default ProductsListing
