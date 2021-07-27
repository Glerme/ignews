import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  :root {
    --white: #ffffff,
    
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-700: #323238;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;
  
    --cyan-500: #61dafb;
    --yellow-500: #eba417; 
  }

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

  html, body, div#__next {
    width: 100%;
    height: 100%;
  }

  body {
    background: var(--gray-900);
    color: #fff;
  }

  body, input, textarea, button, select {
    font: 400 1rem "Roboto", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color: inherit;

    
    &:visited{
      color: inherit;
    }
  }
 
`;

export default GlobalStyles;
