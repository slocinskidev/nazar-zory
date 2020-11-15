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

const Logo = ({ isScrolled }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/nazar-logo/" } }) {
        nodes {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `);

  return (
    <AnchorWrapper href="/">
      {isScrolled ? (
        <StyledImage fluid={data.allFile.nodes[0].childImageSharp.fluid} alt="" />
      ) : (
        <StyledImage fluid={data.allFile.nodes[1].childImageSharp.fluid} alt="" />
      )}
    </AnchorWrapper>
  );
};

export default Logo;
