import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from '../theme/theme';

import Layout from '../layouts/Layout';
import SEO from '../components/Seo/Seo';

import image404 from '../images/404.svg';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.grey1};
`;

const Image = styled.img`
  margin-top: 2rem;

  width: 100%;
  max-width: 400px;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.color.grey2};
`;

const GoToHomepage = styled.p`
  padding-top: 6rem;
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.grey2};

  a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.size.s};
    color: ${({ theme }) => theme.color.tertiary};
    font-weight: ${({ theme }) => theme.font.medium};
    transition: 0.3s ease-in-out color;

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Nie znaleziono strony" />
    <Wrapper>
      <GoToHomepage>
        Wróć do <Link to="/">strony głównej</Link>!
      </GoToHomepage>
      <Image src={image404} alt="błąd 404" />
      <Heading>404: Nie znaleziono strony</Heading>
      <Text>Strona, którą szukasz nie istnieje. Sprawdź czy poprawnie zostały wpisane dane!</Text>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
