import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

import { media } from "../mq"

const MenuItemWrapper = styled.li`
  margin: 0;
  padding: 0.5rem;
  font-weight: 400;
  font-size: 15px;
  font-family: "Space Mono";
  .strike-through {
    display: inline;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 100%;
      bottom: 12px;
      background: #e84b4c;
      height: 4px;
      z-index: -1;
      transition-duration: 0.2s;
      ${media.medium`bottom: 8px; height: 2px;`}
    }
    &.active:after {
      right: 0;
    }
    &:hover:after {
      right: 0;
    }
  }
  img {
    height: 15px;
    width: 15px;
  }
`

const MenuItem = ({ menuItem, mobileNavOpen, toggleMenu }) => {
  //Location
  const location = useLocation()

  return (
    <MenuItemWrapper
      onClick={mobileNavOpen === true ? () => toggleMenu() : null}
    >
      <Link
        to={menuItem.url}
        className={
          location.pathname === menuItem.url
            ? "strike-through active"
            : "strike-through"
        }
      >
        {menuItem.label}
      </Link>
    </MenuItemWrapper>
  )
}

export default MenuItem
