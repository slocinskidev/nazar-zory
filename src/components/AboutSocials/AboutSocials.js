import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import facebookOutlined from '@iconify/icons-ant-design/facebook-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 4rem 0 0 0;
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.color.grey1};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.color.grey1};
`;

const StyledIcon = styled(Icon)`
  width: 60px;
  height: 60px;
  padding: 1rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.tertiary};
  font-weight: ${({ theme }) => theme.font.extraBold};
  text-transform: uppercase;
`;

const AboutSocials = ({ text }) => {
  return (
    <Wrapper>
      {text && <Text>{text}</Text>}
      <IconWrapper>
        <StyledIcon icon={facebookOutlined} />
        <StyledIcon icon={instagramOutlined} />
      </IconWrapper>
    </Wrapper>
  );
};

export default AboutSocials;
