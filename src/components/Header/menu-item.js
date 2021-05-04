import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuItemWrapper = styled.li`
  margin: 0;
  padding: 0.5rem;
  font-size: 2vh;
  font-weight: 600;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    height: 15px;
    width: 15px;
  }
`

const MenuItem = ({ menuItem }) => {
  return (
    <MenuItemWrapper>
      <Link to={menuItem.url}>{menuItem.label}</Link>
    </MenuItemWrapper>
  )
}

export default MenuItem
