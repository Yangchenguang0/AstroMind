import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f8f9fa;
    color: #212529;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;

