import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const AnchorWrapper = styled.a`
  display: block;
  width: 200px;
  height: 200px;
`;

const StyledImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${({ image }) => image});
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            src
          }
        }
      }
    }
  `);
  return (
    <AnchorWrapper href="/">
      <StyledImage image={data.file.childImageSharp.fixed.src} alt="" />
    </AnchorWrapper>
  );
};

export default Logo;
