import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductsListingItem from "./product-listing-item"
import styled from "styled-components"

const ProductListingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2.5rem 0 2.5rem;
  .product-listing-wrapper {
    display: inline-grid;
    grid-template-columns: 25% 25% 25% 25%;
    column-count: 4;
  }
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
                    width: 500
                    placeholder: BLURRED
                    formats: WEBP
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
    <div>
      <div>
        <ProductListingContainer>
          <div className="product-listing-wrapper">
            {products.edges.map(({ node: product }) => (
              <ProductsListingItem key={product?.id} product={product} />
            ))}
          </div>
        </ProductListingContainer>
      </div>
    </div>
  )
}

export default ProductsListing
