import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import styled from "styled-components"
import { media } from "../mq"

const AddToCartButton = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  line-height: 2;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 2px;
  transition: 0.1s ease-in-out;
  outline: none;
  ${media.xsmall`font-size: 20px;`}
  ${media.large`font-size: 15px;`}
  &:hover {
    background-color: white;
    color: black;
  }
`

const AddToCart = ({ variantId }) => {
  const { toggleCartOpen, addProductToCart, isCartOpen } = useContext(
    StoreContext
  )

  function openCart() {
    return isCartOpen === false ? toggleCartOpen() : ""
  }

  const addProductOpenCart = () => {
    addProductToCart(variantId)
    openCart()
  }

  return (
    <AddToCartButton onClick={addProductOpenCart}>Add To Cart</AddToCartButton>
  )
}

export default AddToCart
