import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: black; /* 背景黑色 */
  color: white; /* 文字颜色为白色 */
  padding: 0.8rem 1.6rem; /* 减小高度为原来的80% */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: white; /* 文字颜色为白色 */
`;

const NavLinks = styled.div`
  display: flex;
  & > div {
    position: relative;
    margin: 0 0.75rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const NavLink = styled(Link)`
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

const Navbar = () => {
  return (
    <Nav>
      <Logo>智航星</Logo>
      <NavLinks>
        <ButtonContainer>
          <NavLink to="/">主页</NavLink>
        </ButtonContainer>
        <ButtonContainer>
          <NavLink to="/about">关于我们</NavLink>
        </ButtonContainer>
        <ButtonContainer>
          <NavLink to="/community">社区</NavLink>
        </ButtonContainer>
        {/*<ButtonContainer>*/}
        {/*  <NavLink to="/blog">博客</NavLink> /!* 新增的按钮 *!/*/}
        {/*</ButtonContainer>*/}
        <ButtonContainer>
          <NavLink to="/joinus">加入我们</NavLink>
        </ButtonContainer>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
