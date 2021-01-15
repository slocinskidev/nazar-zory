import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
// import { foodList } from './foodList';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Picture = styled(Image)`
  width: 340px;
  height: 340px;
`;

const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 1rem 6rem;
`;

const Food = styled.p`
  margin-top: 2rem;
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
          <Picture fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="Kebab w cieście" />
          <Food>Kebab w cieście</Food>
          <Price>13,50zł</Price>
        </Item>

        <Item>
          <Picture fluid={data.allFile.edges[4].node.childImageSharp.fluid} alt="Sarma kebab" />
          <Food>Sarma kebab</Food>
          <Price>10,00zł</Price>
        </Item>

        <Item>
          <Picture fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="Kubełek" />
          <Food>Kubełek</Food>
          <Price>13,00zł</Price>
        </Item>

        <Item>
          <Picture fluid={data.allFile.edges[5].node.childImageSharp.fluid} alt="Kebab w bułce" />
          <Food>Kebab w bułce</Food>
          <Price>13,00zł</Price>
        </Item>

        <Item>
          <Picture
            fluid={data.allFile.edges[2].node.childImageSharp.fluid}
            alt="Falafel w cieście"
          />
          <Food>Falafel w cieście</Food>
          <Price>9,00zł</Price>
        </Item>

        <Item>
          <Picture fluid={data.allFile.edges[3].node.childImageSharp.fluid} alt="Frytki duże" />
          <Food>Frytki duże</Food>
          <Price>8,00zł</Price>
        </Item>
      </FoodList>
      <Button href="https://nazarkebabzory.upmenusite.com/" target="_blank">
        Zamów online
      </Button>
      <Button href="tel:324344937">Zadzwoń i zamów!</Button>
    </Wrapper>
  );
};

export default FrequentlyOrdered;
