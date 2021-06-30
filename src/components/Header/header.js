import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"
import { media } from "../mq"

//Components
import Menu from "./menu"
import CartIcon from "../Cart/carticon"
import Cart from "../Cart/cart"
import MenuOverlay from "./menu-overlay"

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
        flex: 0 1 75%;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        ${media.small`flex: 0 1 33%;`}
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
      .menu-wrapper {
        display: none;
        height: 100%;
        width: 100%;
        ${media.medium`display: flex;`}
        &.active {
          display: flex;
        }
      }
      .cart-mobile-wrapper {
        display: flex;
        flex: 1 33%;
        justify-content: flex-end;
        overflow: visible;
        .cart {
          display: block;
          position: relative;
          margin: 0 0.5rem 0 0;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          ${media.medium`display: block !important;`}
          &.active {
            display: none;
          }
        }
        .mobile-button {
          display: block;
          align-self: center;
          margin: 0 0 0 0.5rem;
          padding: 0;
          border: 0;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          font-family: "Space Mono";
          font-size: 15px;
          ${media.medium`display: none; flex: 0 1 33%;`}
        }
      }
    }
  }
`

const Header = ({ mobileNavOpen, toggleMenu }) => {
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

  //Store Context
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext)

  //Location
  const location = useLocation()

  return (
    <HeaderContainer mobileNavOpen={mobileNavOpen}>
      <MenuOverlay
        menu={menu}
        mobileNavOpen={mobileNavOpen}
        toggleMenu={toggleMenu}
      />
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="brand-wrapper">
            <Link to="/">
              <p>Pocket Pictures, Inc.</p>
            </Link>
          </div>

          <div className="menu-wrapper">
            <Menu menu={menu} />
          </div>
          <div className="cart-mobile-wrapper">
            <button
              className={location.pathname !== "/shop" ? "cart active" : "cart"}
              onClick={toggleCartOpen}
            >
              <CartIcon />
            </button>
            <button className="mobile-button" onClick={() => toggleMenu()}>
              Menu
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
