import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import facebookOutlined from '@iconify/icons-ant-design/facebook-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import styled from 'styled-components';
import { device } from '../../theme/device';

const Wrapper = styled.div`
  ${({ footer }) => !footer && `grid-area: socials`};
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.color.grey1};
  ${({ footer }) => footer && `justify-self: flex-end`};
  margin-top: ${({ footer }) => (footer ? '2rem' : '0')};

  @media ${device.laptop} {
    margin-top: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Anchor = styled.a`
  cursor: pointer;

  color: ${({ theme }) => theme.color.grey1};

  transition: 0.3s color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.tertiary};
  }
`;

const StyledIcon = styled(Icon)`
  width: ${({ footer }) => (footer ? '50px' : '60px')};
  height: ${({ footer }) => (footer ? '50px' : '60px')};
  padding: 1rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.tertiary};
  font-weight: ${({ theme }) => theme.font.extraBold};
  text-transform: uppercase;
  padding: 4rem 0 1rem 0;
`;

const Socials = ({ text, footer }) => {
  return (
    <Wrapper footer={footer}>
      {text && <Text>{text}</Text>}
      <IconWrapper>
        <Anchor href="https://www.facebook.com/Nazar-Kebab-%C5%BBory-154306524697148">
          <StyledIcon footer={footer} icon={facebookOutlined} />
        </Anchor>
        <Anchor href="https://www.instagram.com/nazar_kebab_zory/">
          <StyledIcon footer={footer} icon={instagramOutlined} />
        </Anchor>
      </IconWrapper>
    </Wrapper>
  );
};

export default Socials;
