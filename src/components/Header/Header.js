import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import MouseScroll from '../MouseScroll/MouseScroll';

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
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <HeaderWrapper id="start">
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
      <Overlay>
        <Logo />
        <Menu />
        <Hero />
        <MouseScroll />
      </Overlay>
    </HeaderWrapper>
  );
};

export default Header;
