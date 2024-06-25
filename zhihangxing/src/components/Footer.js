import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #007bff;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 智航星. 保留所有权利.</p>
    </FooterContainer>
  );
};

export default Footer;

