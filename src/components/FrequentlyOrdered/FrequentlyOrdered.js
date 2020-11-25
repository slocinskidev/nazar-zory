import React from 'react';
import styled from 'styled-components';
import { foodList } from './foodList';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FoodList = styled.ul`
  color: ${({ theme }) => theme.color.grey1};
  list-style: none;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.bold};
  letter-spacing: -1px;
  font-size: ${({ theme }) => theme.size.l};
  width: 100%;
  margin-bottom: 4rem;
`;

const Item = styled.li`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0;

  grid-template-areas:
    'food food'
    'description description'
    'price price';

  @media ${device.laptop} {
    text-align: left;
    justify-content: space-between;

    grid-template-areas:
      'food price'
      'description .';
  }
`;

const Food = styled.p`
  grid-area: food;
`;

const Description = styled.p`
  grid-area: description;
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.grey2};
`;

const Price = styled.p`
  grid-area: price;
  color: ${({ theme }) => theme.color.tertiary};
`;

const FrequentlyOrdered = () => {
  return (
    <Wrapper>
      <FoodList>
        {foodList.map((item) => (
          <Item key={item.food}>
            <Food>{item.food}</Food>
            <Description>{item.description}</Description>
            <Price>{item.price}</Price>
          </Item>
        ))}
      </FoodList>
      <Button href="https://nazarkebabzory.upmenusite.com/">Zamów online</Button>
      <Button href="tel:324344937">Zadzwoń i zamów!</Button>
    </Wrapper>
  );
};

export default FrequentlyOrdered;
