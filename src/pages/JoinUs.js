import React from 'react';
import styled from 'styled-components';

const JoinUsContainer = styled.div`
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Section = styled.div`
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const JoinUs = () => {
  return (
    <JoinUsContainer>
      <Title>加入我们</Title>
      <Paragraph>
        我们正在寻找对我们理念认同的人，无论你做什么样的工作，什么样的性格、取向和民族，我们都期待你加入我们共同创建社区。
      </Paragraph>
      <Section>
        <Title>我们的理念</Title>
        <Paragraph>
          智航星是一个开放的创新平台，通过结合通用人工智能（AGI）和元宇宙技术，致力于打破传统界限，让每个人都能成为技术进步的推动者和受益者。
        </Paragraph>
      </Section>
      <Section>
        <Title>你是谁？</Title>
        <Paragraph>
          我们欢迎各种背景和经验的人加入我们。无论你是工程师、艺术家、设计师、作家、教师，还是其他职业，只要你对我们的理念感兴趣，并且愿意贡献你的技能和热情，我们都欢迎你。
        </Paragraph>
      </Section>
      <Section>
        <Title>我们提供什么？</Title>
        <Paragraph>
          加入我们的团队，你将有机会与来自世界各地的创新者合作，共同创造一个开放、包容和充满活力的社区。你将有机会学习最新的技术，参与到实际的项目中，并且为构建一个更美好的未来贡献力量。我们希望在未来能够为你提供一份不错的薪水。
        </Paragraph>
      </Section>
    </JoinUsContainer>
  );
};

export default JoinUs;
