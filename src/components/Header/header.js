import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"

//Components
import Menu from "./menu"
import CartIcon from "../Cart/carticon"
import Cart from "../Cart/cart"

//Context
import { StoreContext } from "../../context/StoreContext"

const HeaderContainer = styled.header`
  width: 100%;
  height: 125px;
  .nav-container {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .nav-wrapper {
      display: flex;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 2.5rem 0 2.5rem;
      .brand-wrapper {
        display: flex;
        flex: 1 33%;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        a {
          text-decoration: none;
          color: inherit;
          p {
            margin: 0;
            text-align: left;
            font-family: "Space Mono";
            font-size: 15px;
          }
        }
      }
      .cart-wrapper {
        display: flex;
        flex: 1 33%;
        justify-content: flex-end;
        overflow: visible;
        button {
          position: relative;
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
`

const Header = customFields => {
  //Store Context
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)

  //Location for header change
  const location = useLocation()

  //Menu Query
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wpMenu {
        name
        id
        menuItems {
          nodes {
            path
            url
            label
          }
        }
      }
    }
  `)
  const menu = data?.wpMenu?.menuItems?.nodes

  return (
    <HeaderContainer>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="brand-wrapper">
            <Link to="/">
              <p>Pocket Pictures, Inc.</p>
            </Link>
          </div>
          <Menu menu={menu} />
          <div className="cart-wrapper">
            <button onClick={toggleCartOpen}>
              <CartIcon />
            </button>
          </div>
          <AnimatePresence> {isCartOpen && <Cart />}</AnimatePresence>
        </div>
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
