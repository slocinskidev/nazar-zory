import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  display: grid;
  justify-items: center;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
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
  margin: 1rem 0;
  text-transform: uppercase;
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
