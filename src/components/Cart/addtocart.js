import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import styled from "styled-components"

const AddToCartButton = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 2.5vh;
  line-height: 2;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 2px;
  padding: 1vh 2vh;
  transition: 0.1s ease-in-out;
  outline: none;
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
