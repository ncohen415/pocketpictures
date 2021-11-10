import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const CartOverlayContainer = styled(motion.div)`
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

const CartOverlay = ({ toggleCartOpen }) => {
  return (
    <CartOverlayContainer
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
    </CartOverlayContainer>
  )
}

export default CartOverlay
