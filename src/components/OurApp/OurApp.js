import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.section`
  max-width: 2560px;
  margin: -2rem auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h4`
  font-size: ${({ theme }) => theme.color.white};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.color.white};
`;

const OurApp = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "our-app" }) {
        childImageSharp {
          fluid(maxWidth: 2560, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="Download our mobile app" />
      <Heading>Zamawiaj szybciej przez naszą aplikację</Heading>
      <Text>Dostępna jest w Google Play oraz w App Store za darmo!</Text>
    </Wrapper>
  );
};

export default OurApp;
