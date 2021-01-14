import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroller = keyframes`
	0% {
		transform: translateY(0);
	}

  49% {
    transform: translateY(200%);

	}

  95% {
    transform: translateY(200%);

	}

	100% {
    transform: translateY(0%);

	}

`;

const OutlineWrapper = styled.div`
  width: 24px;
  height: 48px;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.color.white};
  display: grid;
  justify-content: center;
  align-items: start;
  padding: 3px 0;
  margin: 3rem;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  animation: ${scroller} 4s infinite 1s;
`;

const MouseScroll = () => {
  return (
    <OutlineWrapper>
      <Circle />
    </OutlineWrapper>
  );
};

export default MouseScroll;
