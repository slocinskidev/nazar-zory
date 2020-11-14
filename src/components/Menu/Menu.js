import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { device } from '../../theme/device';

const NavigationWrapper = styled.nav``;

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

  @media ${device.laptop} {
    display: none;
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
  background-color: ${({ theme }) => theme.color.white};
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

  @media ${device.laptop} {
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: transparent;
    height: auto;
    width: auto;
    transform: none;
    padding: 0;
    margin: 0;

    li a {
      color: ${({ theme, isScrolled }) => (isScrolled ? theme.color.grey1 : theme.color.white)};
    }
  }
`;

const NavigationItem = styled.li`
  margin: 2rem 1rem;

  .active {
    color: ${({ theme }) => theme.color.tertiary};
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.grey1};
  text-decoration: none;
  padding: 1rem;
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

const Menu = ({ isScrolled, isMenuOpen, handleToggleMenu }) => {
  return (
    <NavigationWrapper>
      <Hamburger type="button" aria-expanded="false" onClick={() => handleToggleMenu()}>
        <SrOnly>Open/close menu</SrOnly>
        <HamburgerBox isMenuOpen={isMenuOpen} />
      </Hamburger>

      <NavigationList isMenuOpen={isMenuOpen} isScrolled={isScrolled}>
        <NavigationItem>
          <StyledLink activeClass="active" to="start" spy smooth duration={1000}>
            Start
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink activeClass="active" to="o-nas" spy smooth duration={1000}>
            O Nas
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink activeClass="active" to="menu" spy smooth duration={1000}>
            Menu
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink activeClass="active" to="kontakt" spy smooth duration={1000}>
            Kontakt
          </StyledLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Menu;
