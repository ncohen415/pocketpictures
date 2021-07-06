import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import styled from "styled-components"
import { media } from "../mq"

//Components
import MenuItem from "./menu-item"

//Images
import IG from "../../images/ig.svg"
import Cart from "../../images/shopping-bag.svg"

const MenuWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    .mobile-cart {
      display: block;
      ${media.medium`display: none;`}
      margin: 0;

      .cart-social {
        display: flex;
        align-items: center;
        height: 50px;
        margin-top: 1rem;
        .mobile-cart-button {
          position: relative;
          top: 0;
          right: 0;
          margin-right: 0.75rem;
        }
        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            margin-left: 0.75rem;
          }
        }
      }
    }
  }
`
const Menu = ({ menu, mobileNavOpen, toggleMenu }) => {
  const {
    removeItemTypeFromCart,
    updateQuantityInCart,
    toggleCartOpen,
    checkout,
    checkPromo,
  } = useContext(StoreContext)
  return (
    <MenuWrapper>
      <ul className="nav">
        {menu.map(menuItem => {
          return (
            <MenuItem
              mobileNavOpen={mobileNavOpen}
              toggleMenu={toggleMenu}
              menuItem={menuItem}
            />
          )
        })}
        <li className="mobile-cart">
          <div class="cart-social">
            <button className="mobile-cart-button" onClick={toggleCartOpen}>
              <img src={Cart} alt="Shopping Bag" />
            </button>
            <a
              href="https://www.instagram.com/pocketpictures.video/?hl=en"
              target="_blank"
            >
              <img src={IG} alt="Instagram" />
            </a>
          </div>
        </li>
      </ul>
    </MenuWrapper>
  )
}

export default Menu
