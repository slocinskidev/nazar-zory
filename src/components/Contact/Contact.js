import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../SectionHeading/SectionHeading';
import Address from '../Address/Address';
import OpeningHours from '../OpeningHours/OpeningHours';

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  padding: 12rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  grid-template-areas: 'heading heading';
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Contact() {
  return (
    <Wrapper id="kontakt">
      <Content>
        <SectionHeading contact heading="Kontakt" subHeading="Nie zwlekaj! Zadzwoń!" />
        <Address />
        <OpeningHours />
      </Content>
    </Wrapper>
  );
}

export default Contact;
