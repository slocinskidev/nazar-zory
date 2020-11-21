import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: heading;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme, contact }) => (contact ? theme.color.white : theme.color.grey1)};
  font-weight: ${({ theme }) => theme.font.bold};
  margin: 2rem 0 6rem;
`;

const SubHeading = styled.p`
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme, contact }) => (contact ? theme.color.secondary : theme.color.tertiary)};
  font-weight: ${({ theme }) => theme.font.extraBold};
  text-transform: uppercase;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
`;

const SectionHeading = ({ icon, heading, subHeading, contact }) => {
  return (
    <Wrapper>
      {icon && <Icon src={icon} alt="" />}
      {subHeading && <SubHeading contact={contact}>{subHeading}</SubHeading>}
      {heading && <Heading contact={contact}>{heading}</Heading>}
    </Wrapper>
  );
};

export default SectionHeading;
