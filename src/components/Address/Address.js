import React from 'react';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import bxsMap from '@iconify-icons/bx/bxs-map';

const AnchorWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  grid-area: address;
`;

const StyledIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  padding: 1rem;
  color: ${({ theme }) => theme.color.secondary};
`;

const AddressList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.xs};
`;

const AddressItem = styled.li`
  padding: 0.25rem;
`;

function Address() {
  return (
    <AnchorWrapper href="/">
      <StyledIcon icon={bxsMap} />
      <AddressList>
        <AddressItem>ul. Górne Przedmieście 2</AddressItem>
        <AddressItem>44-240 Żory</AddressItem>
      </AddressList>
    </AnchorWrapper>
  );
}

export default Address;
