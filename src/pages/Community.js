import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.div`
  text-align: center;
  padding: 8rem 2rem 2rem;
  background: rgba(255, 255, 255, 0.8);
  margin-top: 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #007bff;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 0.25rem;
`;

const Subtitle = styled.h2`
  color: #343a40;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #212529;
  font-size: 1.25rem;
  line-height: 1.6;
`;

const Community = () => {
  return (
    <CommunityContainer>
      <Title>社区</Title>
      <Section>
        <Subtitle>社区活动</Subtitle>
        <Text>我们定期组织线上线下活动，增强社区的凝聚力和参与度。</Text>
      </Section>
      <Section>
        <Subtitle>用户贡献</Subtitle>
        <Text>每个用户都可以贡献自己的创意和想法，共同建设我们的元宇宙。</Text>
      </Section>
      <Section>
        <Subtitle>投票与讨论</Subtitle>
        <Text>通过社区投票和讨论，实现平台的自治和决策。</Text>
      </Section>
    </CommunityContainer>
  );
};

export default Community;
