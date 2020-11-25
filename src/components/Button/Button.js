import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';

const ButtonPrimary = styled.a`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.3px;
  font-weight: ${({ theme }) => theme.font.bold};
  display: block;
  border: none;
  margin: 0 2rem 2rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s background-color ease-in-out;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};

  &:hover {
    background-color: ${({ theme }) => theme.color.tertiaryDarken};
  }

  @media ${device.laptop} {
    margin: 1rem 2rem;
  }
`;

const ButtonSecondary = styled.a`
  cursor: pointer;
  background-color: transparent;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.3px;
  font-weight: ${({ theme }) => theme.font.bold};
  border: 2px solid ${({ theme }) => theme.color.white};
  margin: 2rem 0rem;
  text-decoration: none;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-column-gap: 1rem;
  width: 100%;
  transition: 0.3s color ease-in-out, 0.3s border ease-in-out;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

const Button = ({ children, type, href, secondary }) => {
  return (
    <>
      {secondary ? (
        <ButtonSecondary href={href} type={type}>
          {children}
        </ButtonSecondary>
      ) : (
        <ButtonPrimary href={href} type={type}>
          {children}
        </ButtonPrimary>
      )}
    </>
  );
};

export default Button;
