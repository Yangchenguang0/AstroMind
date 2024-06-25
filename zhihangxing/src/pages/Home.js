import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  color: #fff;
  background: #007bff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>欢迎来到智航星</Title>
      <Description>我们致力于构建一个由普通人共同参与和塑造的未来世界。</Description>
      <LinkButton href="/about">关于我们</LinkButton>
      <LinkButton href="/community">社区</LinkButton>
    </HomeContainer>
  );
};

export default Home;

