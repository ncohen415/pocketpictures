import React, { useContext } from "react"
import styled from "styled-components"

//Components
import { StoreContext } from "../../context/StoreContext"

//Images
import ShoppingBag from "../../images/shopping-bag.svg"

const CartIconContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
  .cart {
    font-family: "Space Mono";
    font-size: 15px;
    margin: 0 0.5rem 0 0;
    padding: 0;
  }
  .counter-wrapper {
    display: flex;
    flex: 0 1 50%;
    font-size: 15px;
    .cart-counter {
      flex: 0 1 50%;
      font-family: "Space Mono";
      font-size: 15px;
      color: #e84b4c;
      margin: 0;
      padding: 0;
    }
  }
`

const CartIcon = () => {
  const { checkout } = useContext(StoreContext)
  const qty = checkout?.lineItems?.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  return (
    <CartIconContainer>
      <p className="cart">Cart</p>
      {qty === 0 ? (
        ""
      ) : (
        <div class="counter-wrapper">
          (<p className="cart-counter">{qty}</p>)
        </div>
      )}
    </CartIconContainer>
  )
}

export default CartIcon
