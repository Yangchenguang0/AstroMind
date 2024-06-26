import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: black; /* 背景黑色 */
  color: white; /* 文字颜色为白色 */
  text-align: center;
  padding: 0.8rem; /* 减小高度为原来的80% */
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

const FooterLink = styled.a`
  display: inline-block;
  padding: 0.4rem 0.8rem; /* 减小高度为原来的80% */
  color: white; /* 文字颜色为白色 */
  background: transparent; /* 背景透明 */
  border: none;
  border-radius: 1rem;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #007bff; /* 鼠标悬停时的颜色 */
    transform: scale(1.05);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="/">主页</FooterLink>
        <FooterLink href="/about">关于我们</FooterLink>
        <FooterLink href="/community">社区</FooterLink>
      </FooterLinks>
      <p>&copy; 2024 智航星. 保留所有权利.</p>
    </FooterContainer>
  );
};

export default Footer;
