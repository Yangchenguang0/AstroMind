import React from 'react';
import styled from 'styled-components';

const EconomyContainer = styled.div`
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

const Economy = () => {
  return (
    <EconomyContainer>
      <Title>经济共享</Title>
      <Description>建立一个公平的经济模型，让所有参与者都能从他们的贡献中获得回报。</Description>
    </EconomyContainer>
  );
};

export default Economy;
