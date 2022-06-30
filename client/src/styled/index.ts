import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, 'sans-serif';
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    direction: rtl;
    margin: 0;
    padding: 0;
    
    input::placeholder,
    textarea::placeholder {
      color: #000;
    }
  }
`;

export const HelperText = styled.div<{error: boolean}>`
  font-size: 1.3rem;
  margin-top: .7rem;
  color: ${props => props.error ? props.theme.palette.error.main : props.theme.palette.common.grey};
  cursor: default;
`;