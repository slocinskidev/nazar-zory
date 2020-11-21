import React from 'react';
import { Icon } from '@iconify/react';
import heartSolid from '@iconify/icons-clarity/heart-solid';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import { device } from '../../theme/device';

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray5};
`;

const Content = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
`;

const CopyrightInfo = styled.p`
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.gray3};
  padding: 2rem 0 1rem 0;
  order: -1;
  justify-self: flex-start;

  @media ${device.laptop} {
    padding: 0;
  }
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.tertiary};
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Logo isScrolled />
        <CopyrightInfo>
          Built with <StyledIcon icon={heartSolid} style={{ fontSize: '16px' }} /> ©{' '}
          {new Date().getFullYear()}
        </CopyrightInfo>
        <Socials footer="true" />
      </Content>
    </Wrapper>
  );
};

export default Footer;
