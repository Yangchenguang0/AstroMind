import React from 'react';
import styled from 'styled-components';

const GovernanceContainer = styled.div`
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

const Governance = () => {
  return (
    <GovernanceContainer>
      <Title>社区自治</Title>
      <Description>通过社区投票、讨论和决策，让普通人参与到平台的治理和发展中，实现真正的社区自治。</Description>
    </GovernanceContainer>
  );
};

export default Governance;
