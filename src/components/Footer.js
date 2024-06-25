import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(52, 58, 64, 0.8);
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  & > div {
    position: relative;
    margin: 0 0.75rem;
  }
`;

const HiddenLinkContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &:hover > a {
    top: 0;
  }
`;

const FooterLink = styled.a`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: #007bff;
  background: transparent;
  border: 1px solid #007bff;
  border-radius: 1rem;
  text-decoration: none;
  font-size: 1rem;
  transition: top 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
    border-color: #0056b3;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <HiddenLinkContainer>
          <FooterLink href="/">主页</FooterLink>
        </HiddenLinkContainer>
        <HiddenLinkContainer>
          <FooterLink href="/about">关于我们</FooterLink>
        </HiddenLinkContainer>
        <HiddenLinkContainer>
          <FooterLink href="/community">社区</FooterLink>
        </HiddenLinkContainer>
      </FooterLinks>
      <p>&copy; 2024 智航星. 保留所有权利.</p>
    </FooterContainer>
  );
};

export default Footer;