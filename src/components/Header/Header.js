import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
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
    <HeaderWrapper>
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
      <Overlay>
        <Logo />
        <Menu />
        <div>Tel + Supply</div>
        <div>Hero</div>
      </Overlay>
    </HeaderWrapper>
  )
}

export default Header;