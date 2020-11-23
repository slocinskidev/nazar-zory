import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.white};
  margin-top: 6rem;
  text-align: center;
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
        <Day>poniedziałek - czwartek</Day>
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
