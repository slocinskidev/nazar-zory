import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import appStoreImg from '../../images/AppStore.svg';
import googlePlayImg from '../../images/GooglePlay.svg';
import { device } from '../../theme/device';

const StyledImage = styled(Image)`
  width: 102%;
  height: 100%;
`;

const Wrapper = styled.section`
  max-width: 2560px;
  overflow: hidden;
  height: 100vh;
  margin: -2rem auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};

  @media ${device.mobileM} {
    height: 70vh;
  }

  @media ${device.laptop} {
    height: 50vh;
  }
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h4`
  font-size: ${({ theme }) => theme.size.m};
  font-weight: ${({ theme }) => theme.font.bold};
  line-height: 46px;
  margin-bottom: 2rem;

  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.size.l};
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium};
  margin-bottom: 4rem;
  line-height: 32px;
  width: 100%;

  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.size.m};
  }
`;

const AnchorWrapper = styled.a`
  cursor: pointer;
  display: block;
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
      <Content>
        <Heading>Zamawiaj szybciej przez naszą aplikację</Heading>
        <Text>Dostępna jest w Google Play oraz w App Store za darmo!</Text>
        <AnchorWrapper href="https://apps.apple.com/gb/app/nazar-kebab-%C5%BCory/id1451951901">
          <img src={appStoreImg} alt="Button to AppStore" />
        </AnchorWrapper>
        <AnchorWrapper href="https://play.google.com/store/apps/details?id=com.upmenu.nazarKebabZory&hl=pl">
          <img src={googlePlayImg} alt="Button to GooglePlay" />
        </AnchorWrapper>
      </Content>
    </Wrapper>
  );
};

export default OurApp;
