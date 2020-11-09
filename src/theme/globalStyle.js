import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';
import './fonts.css';

const GlobalStyle = createGlobalStyle`

  ${normalize}

  *, *::before, *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.font.xs};
    background-color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.primary};
    width: 100%;
    height: 100%;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.primary};
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
