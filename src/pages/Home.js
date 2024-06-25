import React from 'react';
import styled from 'styled-components';
import backgroundVideo from '../assets/background.mp4';

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #fff;
  position: relative;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const HiddenButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  color: #007bff;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #007bff;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #fff;
    border-color: #0056b3;
    background: rgba(0, 123, 255, 0.7);
  }
`;

const Home = () => {
  return (
    <>
      <VideoBackground autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <HomeContainer>
        <Title>欢迎来到智航星</Title>
        <Description>我们致力于构建一个由普通人共同参与和塑造的未来世界。</Description>
        <ButtonContainer>
          <HiddenButton href="/about">关于我们</HiddenButton>
          <HiddenButton href="/community">社区</HiddenButton>
        </ButtonContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
