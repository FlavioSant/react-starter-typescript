import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, div#root {
    width: 100%;
    height: 100%;
  }

  body {
    background: #333;
  }

  body, input, textarea, button {
    font-weight: 500;
    font-family: sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2.2rem;
  }

  button {
    cursor: pointer;
  }
`;
