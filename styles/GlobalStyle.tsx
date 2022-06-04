import { createGlobalStyle } from "styled-components";

export const Colors = {
  $4169e1: "#4169e1",
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;
