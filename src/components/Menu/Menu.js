import React from 'react'
import styled from 'styled-components'

const MenuList = styled.ul`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  list-style: none;
  font-size: ${({theme}) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium}
`;

const ListItem = styled.li`
  margin: 0 20px;
`;

const Menu = () => {
  return (
    <MenuList>
      <ListItem>Start</ListItem>
      <ListItem>O Nas</ListItem>
      <ListItem>Menu</ListItem>
      <ListItem>Kontakt</ListItem>
    </MenuList>
  )
}

export default Menu;