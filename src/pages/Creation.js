import React from 'react';
import styled from 'styled-components';

const CreationContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const Creation = () => {
  return (
    <CreationContainer>
      <Title>内容共创</Title>
      <Description>鼓励用户发挥自己的创意，共同创造丰富多彩的元宇宙内容，无论是虚拟艺术品、游戏还是互动体验。</Description>
    </CreationContainer>
  );
};

export default Creation;
