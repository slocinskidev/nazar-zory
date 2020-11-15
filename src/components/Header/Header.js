import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import MouseScroll from '../MouseScroll/MouseScroll';
import { device } from '../../theme/device';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  object-fit: cover;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

const NavigationBar = styled.section`
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme, isScrolled }) =>
      isScrolled ? theme.color.white : 'transparent'};
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    padding: 1rem 2rem;
  }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header-bg" }) {
        childImageSharp {
          fluid(maxWidth: 2560, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <HeaderWrapper id="start">
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
      <Overlay>
        <NavigationBar isScrolled={scrolled}>
          <Logo isScrolled={scrolled} />
          <Menu isScrolled={scrolled} isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
        </NavigationBar>
        <Hero />
        <MouseScroll />
      </Overlay>
    </HeaderWrapper>
  );
};

export default Header;
