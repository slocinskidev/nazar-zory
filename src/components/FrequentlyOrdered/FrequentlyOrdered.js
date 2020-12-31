import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { foodList } from './foodList';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Ciasto = styled(Image)`
  width: 340px;
  height: 520px;
`;

const Kubelek = styled(Image)`
  width: 340px;
  height: 340px;
`;

const Sarma = styled(Image)`
  width: 340px;
  height: 340px;
`;

const Talerz = styled(Image)`
  width: 340px;
  height: 340px;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
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
  font-size: ${({ theme }) => theme.size.m};
  width: 100%;
  margin-bottom: 4rem;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0;

  grid-template-areas:
    'image image'
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
  margin-top: 2rem;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.grey2};
`;

const Price = styled.p`
  color: ${({ theme }) => theme.color.tertiary};
`;

const FrequentlyOrdered = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "products" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <FoodList>
        <Item>
          <Ciasto fluid={data.allFile.edges[3].node.childImageSharp.fluid} alt="" />
          <Food>Kebab w cieście mały 20cm</Food>
          <Price>8,00zł</Price>
          <Food>Kebab w cieście standard 25cm</Food>
          <Price>13,50zł</Price>
          <Food>Big kebab w cieście 30cm</Food>
          <Price>17,50zł</Price>
        </Item>

        <Item>
          <Kubelek fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="" />
          <Food>Kubełek</Food>
          <Description>mięso kebab, frytki, surówki, sos</Description>
          <Price>13,00zł</Price>
        </Item>

        <Item>
          <Talerz fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="" />
          <Food>Kebab na talerzu</Food>
          <Description>Mięso do wyrboru: wołowina/kurczak, frytki, surówki, sos</Description>
          <Price>18,00zł</Price>
        </Item>

        <Item>
          <Sarma fluid={data.allFile.edges[2].node.childImageSharp.fluid} alt="" />
          <Food>Sarma kebab</Food>
          <Description>mięso kebab, kapusta, sos</Description>
          <Price>10,00zł</Price>
        </Item>

        <Item>
          <Food>Wegetariański falafel w cieście</Food>
          <Price>9,00zł</Price>
        </Item>
      </FoodList>
      <Button href="https://nazarkebabzory.upmenusite.com/">Zamów online</Button>
      <Button href="tel:324344937">Zadzwoń i zamów!</Button>
    </Wrapper>
  );
};

export default FrequentlyOrdered;
