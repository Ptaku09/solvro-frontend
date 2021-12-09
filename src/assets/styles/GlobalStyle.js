import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow: scroll;
    overflow-x: hidden;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
