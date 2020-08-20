import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Sunflower:wght@700&display=swap');

  /* 
  font-family: 'Roboto', sans-serif;
  font-family: 'Sunflower', sans-serif;
  */


  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    background-color: #fff;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }

  img {
    display: block;
  }
  a {
    color: #1b1f2f;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default GlobalStyle;
