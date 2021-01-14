import React from 'react';
import styled from 'styled-components';
import logoBlack from '../../images/logo-black.svg';
import logoWhite from '../../images/logo-white.svg';
import { device } from '../../theme/device';

const AnchorWrapper = styled.a`
  cursor: pointer;
  display: block;
  width: 161px;
  height: 78px;

  @media ${device.laptop} {
    width: ${({ isScrolled }) => (isScrolled ? '140px' : '180px')};
    height: ${({ isScrolled }) => (isScrolled ? '68px' : '87px')};
  }
`;

const Logo = ({ isScrolled }) => {
  return (
    <AnchorWrapper isScrolled={isScrolled} href="/">
      {isScrolled ? (
        <img src={logoBlack} alt="Nazar Kebab Żory Logo with black text" />
      ) : (
        <img src={logoWhite} alt="Nazar Kebab Żory Logo with white text" />
      )}
    </AnchorWrapper>
  );
};

export default Logo;
