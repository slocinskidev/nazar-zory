import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: heading;

  ${({ contact }) =>
    contact &&
    `@media ${device.laptop} {
    align-items: flex-start;
  
  }`}
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.size.xl};
  color: ${({ theme, contact }) => (contact ? theme.color.white : theme.color.grey1)};
  font-weight: ${({ theme }) => theme.font.bold};
  margin: 1rem 0 6rem;
  text-align: center;
`;

const SubHeading = styled.p`
  font-size: ${({ theme }) => theme.size.xs};
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
    <Wrapper contact={contact}>
      {icon && <Icon src={icon} alt="" />}
      {subHeading && <SubHeading contact={contact}>{subHeading}</SubHeading>}
      {heading && <Heading contact={contact}>{heading}</Heading>}
    </Wrapper>
  );
};

export default SectionHeading;
