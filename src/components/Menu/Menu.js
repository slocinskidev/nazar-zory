import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  width: 100%;
`;

const Hamburger = styled.button`
  position: fixed;
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
  background: ${({ theme, isMenuOpen }) => (isMenuOpen ? theme.color.grey1 : theme.color.white)};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  z-index: 10;
  background-color: ${({ isMenuOpen }) => (isMenuOpen ? 'transparent' : 'white')};

  &::before,
  &::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.3rem;
    background: ${({ theme, isMenuOpen }) => (isMenuOpen ? theme.color.grey1 : theme.color.white)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: absolute;
    transform-origin: 1px;
  }

  &::before {
    top: -0.8rem;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(-0.3rem) translateX(0.4rem) rotate(45deg) ' : 'rotate(0)'};
  }

  &::after {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(0) translateX(0.4rem) rotate(-45deg)' : 'rotate(0)'};
    top: 0.8rem;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  height: 100vh;
  min-width: 240px;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

const NavigationItem = styled.li`
  margin: 30px 20px;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.grey1};
  text-decoration: none;
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

const Menu = ({ isMenuOpen, handleToggleMenu }) => {
  return (
    <NavigationWrapper>
      <Hamburger type="button" aria-expanded="false" onClick={() => handleToggleMenu()}>
        <SrOnly>Open/close menu</SrOnly>
        <HamburgerBox isMenuOpen={isMenuOpen} />
      </Hamburger>
      <NavigationList isMenuOpen={isMenuOpen}>
        <NavigationItem>
          <StyledLink to="/#start">Start</StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/#o-nas">O Nas</StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/#menu">Menu</StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/#kontakt">Kontakt</StyledLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Menu;
