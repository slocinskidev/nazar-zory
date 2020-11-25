import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';
import Button from '../Button/Button';

const Wrapper = styled.section`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 768px;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.size.xxl};
    line-height: 82px;
    padding-bottom: 6rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Heading>Najlepszy kebab w mieście z dowozem</Heading>
      <Button href="https://nazarkebabzory.upmenusite.com/">Zamów online</Button>
      <Button href="tel:324344937">Zadzwoń i zamów!</Button>
    </Wrapper>
  );
};

export default Hero;
