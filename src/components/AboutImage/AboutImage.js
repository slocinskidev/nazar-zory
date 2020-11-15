import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const StyledImage = styled(Image)`
  grid-area: image;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "about-image" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />;
};

export default AboutImage;
