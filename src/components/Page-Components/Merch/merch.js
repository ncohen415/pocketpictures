import React from "react"
import styled from "styled-components"

//Components
import ProductsListing from "../../Product/products-listing"

const MerchPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 3rem 0 3rem;
`

const Merch = () => {
  return (
    <MerchPageContainer>
      <ProductsListing />
    </MerchPageContainer>
  )
}

export default Merch
