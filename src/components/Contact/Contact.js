import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../SectionHeading/SectionHeading';
import Address from '../Address/Address';

const Wrapper = styled.section`
  display: grid;
  max-width: 1200px;
  padding: 12rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  grid-template-areas: 'heading heading';
  justify-content: center;
`;

function Contact() {
  return (
    <Wrapper>
      <SectionHeading contact heading="Kontakt" subHeading="Nie zwlekaj! Zadzwoń!" />
      <Address />
    </Wrapper>
  );
}

export default Contact;
