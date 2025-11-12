import { createGlobalStyle } from "styled-components";

export const colors = {
  white: " #fff",
  background: "rgba(18, 13, 65, 1)",
  lightblue: "rgb(40, 32, 107)",
  gray: "rgb(197, 197, 197)",
};

export const breakpoints = {
  tablet: "1024px",
  mobile: "768px",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    body {
        background-color: ${colors.background};
    }
        
    .container {
        width: 1024px;
        margin: 0 auto;

      @media (max-width: ${breakpoints.mobile}) {
          max-width: 400px;
      }
    }`;

export default createGlobalStyle;
