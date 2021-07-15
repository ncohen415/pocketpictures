import React, { useContext } from "react"
import styled from "styled-components"
import { StoreContext } from "../../context/StoreContext"
import { motion } from "framer-motion"
import { media } from "../mq"

//Images
import CloseCart from "../../images/close-cart.svg"
import RemoveFromCart from "../../images/remove-from-cart.svg"

//Styled Components
const CartContainer = styled(motion.div)`
  position: fixed;
  z-index: 5000;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  box-shadow: -3px 0 10px 1px gray;
  overflow-y: scroll;
  padding: 2rem 1.5rem 2rem 1.5rem;
  ${media.medium`width: 35%;`}
  ::-webkit-scrollbar {
    display: none;
  }
  .cart-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2rem 0;
    h1 {
      padding: 0;
      margin: 0;
      font-family: "Neue Haas Grotesk Bold";
    }
    button {
      height: 30px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      img {
        padding: 0;
        margin: 0;
        height: 30px;
        width: 30px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  .empty {
    font-family: "Neue Haas Grotesk Light";
  }
  .subtotal-wrapper {
    display: flex;
    flex-direction: column;
    h3 {
      font-family: "Neue Haas Grotesk Medium";
      padding: 0;
      margin: 0;
    }
    p {
      font-family: "Neue Haas Grotesk Light";
      font-size: 12px;
      opacity: 0.7;
      margin: 0;
      padding: 0;
    }
  }
  .checkout-wrapper {
    font-family: "Open Sans", sans-serif;
    display: flex;
    width: 100%;
    margin: 2vh 0 0 0;
    a {
      width: 100%;
      text-decoration: none;
      color: inherit;
      button {
        font-family: "Neue Haas Grotesk";
        cursor: pointer;
        text-align: center;
        font-size: 15px;
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
      }
    }
  }
`
const ItemWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: end;
  .image-wrapper {
    width: 75px;
    height: 75px;
    overflow: hidden;
    img {
      padding: 0;
      margin: 0;
    }
  }
  .info-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 0 0 1rem;
    p {
      padding: 0;
      margin: 0;
    }
    .product-title {
      font-size: 18px;
      font-weight: 600;
    }
    .variant-info {
      font-size: 13px;
      opacity: 0.7;
    }
    .quantity-wrapper {
      display: flex;
      align-items: center;
      height: 20px;
      .remove {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        outline: none;
        border: 0.5px solid black;
        font-size: 10px;
        cursor: pointer;
        margin: 0 0.5rem 0 0;
      }
      .add {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        outline: none;
        border: 0.5px solid black;
        font-size: 10px;
        cursor: pointer;
        margin: 0 0.5rem 0 0.5rem;
      }
      p {
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .price-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 100%;
    button {
      height: 15px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      img {
        width: 15px;
        height: 15px;
        opacity: 0.3;
      }
    }
  }
`

const CartOverlay = styled(motion.div)`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  background-color: #e84b4c;
  z-index: 4999;
  button {
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    border: none;
  }
`

const Cart = () => {
  //Context
  const {
    removeItemTypeFromCart,
    updateQuantityInCart,
    toggleCartOpen,
    checkout,
  } = useContext(StoreContext)

  return (
    <>
      <CartContainer
        key="cart-container"
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: 300, opacity: 0 },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="cart-title">
          <h1>Cart</h1>
          <button onClick={toggleCartOpen}>
            <img src={CloseCart} alt="Close Cart" />
          </button>
        </div>

        <hr style={{ marginTop: "calc(1.45rem - 1px)" }} />
        {checkout.lineItems.length === 0 ? (
          <p className="empty">Your cart is empty!</p>
        ) : (
          ""
        )}
        {checkout.lineItems.map(item => (
          <ItemWrapper key={item.id}>
            <div className="image-wrapper">
              <img src={item.variant.image.src} alt="Product Thumbnail" />
            </div>
            <div className="info-wrapper">
              <p className="product-title">{item.title}</p>
              {item?.variant?.selectedOptions?.map(option => (
                <p className="variant-info">
                  {option.name}: {option.value}
                </p>
              ))}
              <div className="quantity-wrapper">
                <button
                  className="remove"
                  onClick={() => updateQuantityInCart(item, item.quantity - 1)}
                >
                  -
                </button>
                <p className="product-quantity">{item.quantity}</p>
                <button
                  className="add"
                  onClick={() => updateQuantityInCart(item, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="price-wrapper">
              <button onClick={() => removeItemTypeFromCart(item.id)}>
                <img src={RemoveFromCart} alt="Remove From Cart" />
              </button>
              <p className="product-price">${item.variant.price}</p>
            </div>
          </ItemWrapper>
        ))}
        <hr />
        <div className="subtotal-wrapper">
          <h3>Subtotal: ${checkout.subtotalPrice}</h3>
          <p>(Shipping and taxes calculated at checkout.)</p>
        </div>
        <div className="checkout-wrapper">
          <a
            className="checkout-button"
            href={checkout.webUrl}
            target="_blank"
            rel="noreferrer"
          >
            <button>Checkout</button>
          </a>
        </div>
      </CartContainer>
      <CartOverlay
        key="cart-container"
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          open: { opacity: 0.5 },
          closed: { opacity: 0 },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <button onClick={toggleCartOpen}></button>
      </CartOverlay>
    </>
  )
}

export default Cart
