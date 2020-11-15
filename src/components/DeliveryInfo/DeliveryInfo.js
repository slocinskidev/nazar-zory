import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import deliveryTruck from '@iconify/icons-carbon/delivery-truck';
import styled from 'styled-components';
import { device } from '../../theme/device';

const Wrapper = styled.div`
  margin: 6rem 0 0 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.grey1};

  @media ${device.laptop} {
    margin: 0 0 0 4rem;
    color: ${({ theme }) => theme.color.white};
  }
`;

const Info = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium};
  margin-left: 1rem;
`;

const DeliveryInfo = () => {
  return (
    <Wrapper>
      <Icon icon={deliveryTruck} style={{ fontSize: '35px' }} />
      <Info>dostawa: 0 zł - 5 zł</Info>
    </Wrapper>
  );
};

export default DeliveryInfo;
