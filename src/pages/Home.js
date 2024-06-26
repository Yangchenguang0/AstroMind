import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import VideoCarousel from '../components/VideoCarousel';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  &.page-exit {
    animation: ${fadeOut} 1s forwards;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background: #0056b3;
    color: #fff;
    transform: scale(1.05);
  }

  &:hover::after {
    content: " ➡️";
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CSSTransition
        in={isLoading}
        timeout={1000}
        classNames="page"
        unmountOnExit
      >
        <LoadingContainer>加载中...</LoadingContainer>
      </CSSTransition>

      {!isLoading && (
        <CSSTransition
          in={!isLoading}
          timeout={1000}
          classNames="page"
          unmountOnExit
        >
          <HomeContainer>
            <VideoCarousel />
            <Title>欢迎来到智航星</Title>
            <Description>我们致力于构建一个由普通人共同参与和塑造的未来世界。</Description>
            <ButtonContainer>
              <Button href="/about">关于我们</Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button href="/community">社区</Button>
            </ButtonContainer>
          </HomeContainer>
        </CSSTransition>
      )}
    </>
  );
};

export default Home;
