import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
html,
body {
  height: 100%;
}

body {
  font-family: Open Sans, Arial, Helvetica, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #d7dfe5;
  font-size: 16px;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}


`;

export default GlobalStyle;
