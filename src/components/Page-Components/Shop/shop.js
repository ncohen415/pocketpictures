import React from "react"
import styled from "styled-components"
import SEO from "../../seo"

//Components
import ProductsListing from "../../Product/products-listing"

const ShopPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`

const Merch = () => {
  return (
    <ShopPageContainer>
      <SEO title="Shop" />
      <ProductsListing />
    </ShopPageContainer>
  )
}

export default Merch
