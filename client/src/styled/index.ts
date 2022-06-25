import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    direction: rtl;
    margin: 0;
    padding: 0;
  }
`