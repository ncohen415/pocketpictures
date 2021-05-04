import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"

//Components
import Menu from "./menu"
import CartIcon from "../Cart/CartIcon"
import Cart from "../Cart/Cart"

//Images
import Raymond from "../../images/raymond.jpg"

//Context
import { StoreContext } from "../../context/StoreContext"

const HeaderContainer = styled.header`
  .nav-container {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    height: 20vh;
    box-sizing: border-box;
    background-color: rgba(237, 64, 64, 0.5);
    &.home-page {
      background-color: white;
    }
    .nav-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 2.5rem 0 2.5rem;
      .brand-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 25%;
        a {
          text-decoration: none;
          color: inherit;
          h1 {
            margin: 0;
            text-align: left;
            font-size: 3vh;
          }
        }
      }

      .cart-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 25%;
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
  .home-page-heading {
    padding: 0 4rem 0 4rem;
    height: 62vh;
    font-family: "Open Sans", sans-serif;
    background-color: rgba(237, 64, 64, 0.5);
    h1 {
      font-size: 7vh;
    }
    p {
      font-size: 3vh;
      opacity: 0.6;
    }
    &.home-page {
      display: none;
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

  // data for header ACFs are being passed from the layout. the prop is called customFields and for some reason the returned object contains customFields twice. created a new const to change name back to original variable from layout and eliminate extra node.
  const headerACF = customFields.customFields

  console.log("header", headerACF)
  return (
    <HeaderContainer>
      <div
        className={`nav-container ${
          location.pathname !== "/" ? "home-page" : ""
        }`}
      >
        <div className="nav-wrapper">
          <div className="brand-wrapper">
            <Link to={headerACF.headerHomeLink}>
              <h1>
                Pocket <br />
                Pictures
              </h1>
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
      <div
        className={`home-page-heading ${
          location.pathname !== "/" ? "home-page" : ""
        }`}
      >
        <h1>{headerACF.heading}</h1>
        <p>{headerACF.subHeading}</p>
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
