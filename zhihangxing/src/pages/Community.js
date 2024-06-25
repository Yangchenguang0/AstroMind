import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;

const Section = styled.div`
  margin: 2rem 0;
`;

const Subtitle = styled.h2`
  color: #555;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #666;
  font-size: 1.2rem;
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

