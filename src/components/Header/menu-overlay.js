import React from "react"
import styled from "styled-components"

//Components
import Menu from "./menu"

//Images
import CloseMenu from "../../images/close-mobile-nav.svg"

const Overlay = styled.div`
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: -1;
  position: fixed;
  transition: all 0.1s ease-in-out;
  transform-origin: top;
  &.active {
    opacity: 1;
    z-index: 20;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    padding-left: 0;
    list-style-type: none;
    li {
      padding: 0 0 2% 0;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 30px;
      margin: 0.5rem 0 0.5rem 0;
      a {
        color: black;
        transition: color 0.4s ease;
        display: block;
        text-decoration: none;
      }
    }
  }
  button {
    display: block;
    align-self: center;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    img {
      margin: 0;
      padding: 0;
    }
  }
`

const MenuOverlay = ({ menu, mobileNavOpen, toggleMenu }) => {
  return (
    <>
      <Overlay className={mobileNavOpen === true ? "active" : ""}>
        <Menu
          menu={menu}
          toggleMenu={toggleMenu}
          mobileNavOpen={mobileNavOpen}
        />
        <button onClick={() => toggleMenu()}>
          <img src={CloseMenu} alt="Close Menu" />
        </button>
      </Overlay>
    </>
  )
}

export default MenuOverlay
