import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';

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
  padding-bottom: 2rem;
  margin: 0;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.size.xxl};
    line-height: 82px;
    padding-bottom: 6rem;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.3px;
  font-weight: ${({ theme }) => theme.font.bold};
  display: block;
  border: none;
  margin: 1rem;
  text-transform: uppercase;

  @media ${device.laptop} {
    margin: 1rem 2rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Heading>Najlepszy kebab w mieście z dowozem</Heading>
      <Button type="button">Zamów online</Button>
      <Button type="button">Zadzwoń i zamów!</Button>
    </Wrapper>
  );
};

export default Hero;
