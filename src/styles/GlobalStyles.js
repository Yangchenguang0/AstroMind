import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/background.mp4';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  body {
    margin: 0;
    font-family: 'Orbitron', 'Roboto', sans-serif;
    color: #212529;
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', sans-serif;
  }
`;

export default GlobalStyles;
