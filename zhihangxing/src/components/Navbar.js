import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #007bff;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  margin: 0;
`;

const NavLinks = styled.div`
  & > a {
    margin: 0 0.5rem;
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>智航星</Logo>
      <NavLinks>
        <Link to="/">主页</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/community">社区</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

