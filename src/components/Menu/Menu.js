import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Hamburger = styled.button`
  position: absolute;
  top: 5%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 5rem;
  height: 5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const HamburgerBox = styled.span`
  width: 3rem;
  height: 0.3rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: absolute;
    transform-origin: 1px;
  }

  &::before {
    top: -0.8rem;
  }

  &::after {
    top: 0.8rem;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.color.grey1};
  list-style: none;
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium};
`;

const NavigationItem = styled.li`
  margin: 30px 20px;
`;

const SrOnly = styled.span`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Menu = () => {
  return (
    <nav>
      <Hamburger type="button" aria-expanded="false">
        <SrOnly>Open/close menu</SrOnly>
        <HamburgerBox />
      </Hamburger>
      <NavigationList>
        <NavigationItem active>
          <Link to="/#start">Start</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/#o-nas">O Nas</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/#menu">Menu</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/#kontakt">Kontakt</Link>
        </NavigationItem>
      </NavigationList>
    </nav>
  );
};

export default Menu;
