import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(52, 58, 64, 0.8);
  color: #fff;
  padding: 1rem 2rem;
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
`;

const NavLinks = styled.div`
  display: flex;
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

const NavLink = styled(Link)`
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

const Navbar = () => {
  return (
    <Nav>
      <Logo>智航星</Logo>
      <NavLinks>
        <HiddenLinkContainer>
          <NavLink to="/">主页</NavLink>
        </HiddenLinkContainer>
        <HiddenLinkContainer>
          <NavLink to="/about">关于我们</NavLink>
        </HiddenLinkContainer>
        <HiddenLinkContainer>
          <NavLink to="/community">社区</NavLink>
        </HiddenLinkContainer>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
