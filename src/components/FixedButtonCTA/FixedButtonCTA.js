import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from '@iconify/react';
// import basketIcon from '@iconify-icons/simple-line-icons/basket';
import basketIcon from '@iconify-icons/bx/bx-basket';
import Button from '../Button/Button';
import { device } from '../../theme/device';

import { theme } from '../../theme/theme';

const pulse = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	7% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	10% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}

  13% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

`;

const Telephone = styled.button`
  outline: none;
  position: fixed;
  width: 7rem;
  height: 7rem;
  bottom: 5rem;
  right: 2rem;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.color.tertiary};
  border-radius: 50%;
  border: none;
  transition: color 0.3s ease;
  z-index: 11;
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  transition: box-shadow 0.3s ease;
  animation: ${pulse} 5s infinite;

  &:hover,
  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 6px 12px rgba(0, 0, 0, 0.24);
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.white};
  width: 40px;
  height: 40px;
`;

const Body = styled.div`
  position: fixed;
  bottom: 160px;
  right: 0;
  opacity: 0;
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  background-color: ${({ theme }) => theme.color.white};
  transition: all 0.3s ease;
  visibility: hidden;
  max-width: 400px;
  z-index: 11;
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 450px) {
    right: 30px;
  }

  @media ${device.laptop} {
    padding-top: 0;
  }

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 11;
  transition: all 0.3s ease;
  cursor: pointer;

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const FixedButtonCTA = ({ isScrolled }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    isScrolled && (
      <>
        <Overlay onClick={toggleVisible} className={visible ? 'visible' : ''} />
        <Telephone onClick={toggleVisible}>
          <TelephoneIcon icon={basketIcon} />
        </Telephone>

        <Body className={visible ? 'visible' : ''}>
          <Button href="https://nazarkebabzory.upmenusite.com/" target="_blank">
            Zamów online
          </Button>
          <Button href="tel:324344937">Zadzwoń i zamów!</Button>
        </Body>
      </>
    )
  );
};

export default FixedButtonCTA;
