import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
  }
  
  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  button{
    border: none;
    cursor: pointer;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.font.sizes.normal};
    line-height: 1.35;
    background: ${theme.colors.white};
  }
  
  
  h1, h2, h3, h4, h5, h6 {

    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

export default GlobalStyle;
