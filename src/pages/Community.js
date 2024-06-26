// src/pages/Community.js

import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #333;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #555;
`;

const ContentSection = styled.div`
  width: 60%;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const SectionContent = styled.p`
  font-size: 1.25rem;
  color: #555;
`;

const Community = () => {
  return (
    <CommunityContainer>
      <Title>社区</Title>
      <Description>欢迎来到我们的社区页面。在这里，我们鼓励用户互动和合作，共同推动我们的项目进展。</Description>
      <ContentSection>
        <SectionTitle>社区活动</SectionTitle>
        <SectionContent>定期举办在线和线下活动，欢迎大家积极参与。</SectionContent>
      </ContentSection>
      <ContentSection>
        <SectionTitle>讨论论坛</SectionTitle>
        <SectionContent>加入我们的讨论论坛，分享你的想法和建议。</SectionContent>
      </ContentSection>
      <ContentSection>
        <SectionTitle>资源共享</SectionTitle>
        <SectionContent>在这里你可以找到各种有用的资源，帮助你更好地参与社区活动。</SectionContent>
      </ContentSection>
    </CommunityContainer>
  );
};

export default Community;
