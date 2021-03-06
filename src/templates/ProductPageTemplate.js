import React from "react"
import { graphql } from "gatsby"

//Components
import ProductDetail from "../components/Product/product-detail"

const ProductPageTemplate = ({ data }) => {
  const product = data?.product?.edges[0]?.node || {}

  return (
    <>
      <ProductDetail product={product} />
    </>
  )
}

export const data = graphql`
  query($handle: String!) {
    product: allShopifyProduct(filter: { handle: { eq: $handle } }) {
      edges {
        node {
          handle
          title
          shopifyId
          descriptionHtml
          description
          images {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: WEBP, width: 750)
              }
            }
          }
          variants {
            shopifyId
            id
            title
            sku
            price
            availableForSale
          }
        }
      }
    }
  }
`

export default ProductPageTemplate
