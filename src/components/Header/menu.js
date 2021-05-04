import React from "react"
import styled from "styled-components"

//Components
import MenuItem from "./menu-item"

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
  }
`
const Menu = ({ menu }) => {
  return (
    <MenuWrapper>
      <ul className="nav">
        {menu.map(menuItem => {
          return <MenuItem menuItem={menuItem} />
        })}
      </ul>
    </MenuWrapper>
  )
}

export default Menu
