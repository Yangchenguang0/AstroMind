import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const About = () => {
  return (
    <AboutContainer>
      <Title>关于我们</Title>
      <Section>
        <Subtitle>平台愿景</Subtitle>
        <Text>智航星是一个开放的创新平台，通过结合通用人工智能（AGI）和元宇宙技术，让每个人都能成为技术进步的推动者和受益者。</Text>
      </Section>
      <Section>
        <Subtitle>平台内容</Subtitle>
        <Text>我们致力于将前沿技术带给每一个普通人，鼓励用户共同创造丰富多彩的元宇宙内容，并通过社区自治实现真正的社区自治。</Text>
      </Section>
      <Section>
        <Subtitle>团队介绍</Subtitle>
        <Text>我们的团队由一群热衷于技术创新和社区建设的专业人士组成，致力于打造一个公平和开放的平台。</Text>
      </Section>
    </AboutContainer>
  );
};

export default About;
