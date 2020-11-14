import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { device } from '../../theme/device';

const AnchorWrapper = styled.a`
  display: block;
  width: 161px;
  height: 78px;

  @media ${device.laptop} {
    justify-content: space-between;
    width: 140px;
    height: 68px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <AnchorWrapper href="/">
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
    </AnchorWrapper>
  );
};

export default Logo;
