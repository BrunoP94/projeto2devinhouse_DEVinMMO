import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    list-style: none;
    padding: 0;
    margin:0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.color.text};
  }

  h1
 {
    padding: 0;
    margin-left: 15px;
  }

  input {
    font-family: "Montserrat", sans-serif;
  }
`;

