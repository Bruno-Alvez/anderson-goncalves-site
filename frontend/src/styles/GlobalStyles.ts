import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    background-color: #0A192F; /* fundo azul escuro padrão do projeto */
    color: #E6F0FF; /* texto claro para contraste */
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body > * {
    margin-top: 0;
  }
`