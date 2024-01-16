import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';

const Wrapper = styled.div`
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 6rem 0 2rem;
  text-align: center;
  grid-area: openinghours;

  @media ${device.laptop} {
    text-align: left;
  }
`;

const Heading = styled.h4`
  font-size: ${({ theme }) => theme.size.m};
`;

const HoursList = styled.ul`
  list-style: none;
`;

const Day = styled.li`
  font-size: ${({ theme }) => theme.size.s};
  margin: 2rem 0 1rem;
`;

const Hour = styled.li`
  font-size: ${({ theme }) => theme.size.xs};
  font-weight: ${({ theme }) => theme.font.regular};
`;

const OpeningHours = () => {
  return (
    <Wrapper>
      <Heading>Godziny otwarcia</Heading>
      <HoursList>
        <Day>poniedziałek</Day>
        <Hour>14:00 - 22:00</Hour>
        <Day>wtorek - czwartek</Day>
        <Hour>11:00 - 22:00</Hour>
        <Day>piątek - sobota</Day>
        <Hour>11:00 - 1:00</Hour>
        <Day>niedziela</Day>
        <Hour>14:00 - 22:00</Hour>
      </HoursList>
    </Wrapper>
  );
};

export default OpeningHours;
