import React, { useContext } from "react"
import styled from "styled-components"

//Components
import { StoreContext } from "../../context/StoreContext"

//Images
import ShoppingBag from "../../images/shopping-bag.svg"

const CartIconContainer = styled.div`
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    height: 2.5vh;
    width: 2.5vh;
    margin: 0;
    padding: 0;
  }
  .cart-counter {
    position: absolute;
    top: -7px;
    left: 7px;
    background-color: red;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    height: 20px;
    width: 20px;
    font-size: 12px;
    padding: 0 0 0 1px;
  }
`

const CartIcon = () => {
  const { checkout } = useContext(StoreContext)
  const qty = checkout?.lineItems?.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  return (
    <CartIconContainer>
      <img src={ShoppingBag} alt="Cart" />
      {qty === 0 ? "" : <div className="cart-counter">{qty}</div>}
    </CartIconContainer>
  )
}

export default CartIcon
