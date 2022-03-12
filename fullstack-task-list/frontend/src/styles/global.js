import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: #13747d;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`; 
