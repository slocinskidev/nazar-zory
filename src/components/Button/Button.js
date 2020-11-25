import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';

const ButtonPrimary = styled.button`
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.3px;
  font-weight: ${({ theme }) => theme.font.bold};
  display: block;
  border: none;
  margin: 0 1rem 1rem 1rem;
  text-transform: uppercase;

  @media ${device.laptop} {
    margin: 1rem 2rem;
  }
`;

const ButtonSecondary = styled.a`
  background-color: transparent;
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.3px;
  font-weight: ${({ theme }) => theme.font.bold};
  border: 2px solid ${({ theme }) => theme.color.white};
  margin: 2rem 0rem;
  /* text-transform: uppercase; */
  text-decoration: none;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-column-gap: 1rem;
  max-width: 320px;
  transition: 0.3s color ease-in-out, 0.3s border ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }

  /* @media ${device.laptop} {
    margin: 1rem 2rem;
  } */
`;

const Button = ({ children, type, href, as }) => {
  return (
    <>
      {as === 'a' ? (
        <ButtonSecondary href={href} type={type}>
          {children}
        </ButtonSecondary>
      ) : (
        <ButtonPrimary type={type}>{children}</ButtonPrimary>
      )}
    </>
  );
};

export default Button;
