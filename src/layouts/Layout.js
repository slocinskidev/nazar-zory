import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import GlobalStyle from '../theme/globalStyle';
import {theme} from '../theme/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
