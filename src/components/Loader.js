import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const LoaderText = styled.p`
  color: white;
  font-size: 1.5rem;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderText>加载中...</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
