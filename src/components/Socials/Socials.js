import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import facebookOutlined from '@iconify/icons-ant-design/facebook-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ footer }) => !footer && `grid-area: socials`};
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.color.grey1};
  ${({ footer }) => footer && `justify-self: flex-end`};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.color.grey1};
`;

const StyledIcon = styled(Icon)`
  width: ${({ footer }) => (footer ? '50px' : '60px')};
  height: ${({ footer }) => (footer ? '50px' : '60px')};
  padding: 1rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.tertiary};
  font-weight: ${({ theme }) => theme.font.extraBold};
  text-transform: uppercase;
  padding: 4rem 0 2rem 0;
`;

const Socials = ({ text, footer }) => {
  return (
    <Wrapper footer={footer}>
      {text && <Text>{text}</Text>}
      <IconWrapper>
        <StyledIcon footer={footer} icon={facebookOutlined} />
        <StyledIcon footer={footer} icon={instagramOutlined} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Socials;
