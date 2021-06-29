import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuItemWrapper = styled.li`
  margin: 0;
  padding: 0.5rem;
  font-weight: 400;
  font-size: 15px;
  font-family: "Space Mono";
  a {
    text-decoration: none;
    color: inherit;
    .strike-through {
      display: inline;
      position: relative;
      overflow: hidden;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 100%;
        bottom: 8px;
        background: #e84b4c;
        height: 2px;
        z-index: -1;
        transition-duration: 0.2s;
      }
      &:hover:after {
        right: 0;
      }
      &:focus:after {
        right: 0;
      }
      &:active:after {
        right: 0;
      }
    }
  }
  img {
    height: 15px;
    width: 15px;
  }
`

const MenuItem = ({ menuItem, mobileNavOpen, toggleMenu }) => {
  return (
    <MenuItemWrapper
      onClick={mobileNavOpen === true ? () => toggleMenu() : null}
    >
      <Link to={menuItem.url}>
        <div class="strike-through"> {menuItem.label}</div>
      </Link>
    </MenuItemWrapper>
  )
}

export default MenuItem
