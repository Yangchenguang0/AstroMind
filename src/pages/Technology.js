import React from 'react';
import styled from 'styled-components';

const TechnologyContainer = styled.div`
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

const Technology = () => {
  return (
    <TechnologyContainer>
      <Title>技术民主化</Title>
      <Description>我们致力于将前沿技术带给每一个普通人，让每个人都能参与到AGI的学习和应用中。</Description>
    </TechnologyContainer>
  );
};

export default Technology;
