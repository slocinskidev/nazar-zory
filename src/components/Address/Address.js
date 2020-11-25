import React from 'react';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import bxsMap from '@iconify-icons/bx/bxs-map';

const AnchorWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  grid-area: address;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.xs};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const StyledIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  padding: 1rem;
  color: ${({ theme }) => theme.color.secondary};
`;

const AddressData = styled.p`
  line-height: 1.5;
`;

function Address() {
  return (
    <AnchorWrapper href="https://g.page/Kebaba?share">
      <StyledIcon icon={bxsMap} />
      <AddressData>
        ul. Górne Przedmieście 2 <br />
        44-240 Żory
      </AddressData>
    </AnchorWrapper>
  );
}

export default Address;
