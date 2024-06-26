import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/background.mp4';
import fallbackBackgroundImage from '../assets/fallback-background.jpg'; // 静态背景图片

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    margin: 0;
    font-family: 'Orbitron', 'Roboto', sans-serif;
    color: #212529;
    background: url(${fallbackBackgroundImage}) no-repeat center center fixed;
    background-size: cover;
  }

  @media (min-width: 768px) {
    body {
      background: url(${backgroundImage}) no-repeat center center fixed;
      background-size: cover;
    }
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

  /* Responsive typography */
  h1 {
    font-size: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  /* Image and video styles */
  img, video {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
