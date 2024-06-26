// src/pages/Join.js
import React from 'react';
import styled from 'styled-components';

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-bottom: 6rem; /* 添加底部内边距 */
  color: #333;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #007bff;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: left;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Join = () => {
  return (
    <JoinContainer>
      <Title>加入我们</Title>
      <Section>
        <Description>
          我们正在寻找对我们理念认同的人，无论你做什么样的工作，什么样的性格、取向和民族等，我们都期待你加入我们共同创建社区。
        </Description>
      </Section>
      <Section>
        <Subtitle>我们的理念</Subtitle>
        <Description>
          智航星是一个开放的创新平台，通过结合通用人工智能（AGI）和元宇宙技术，致力于打破传统界限，让每个人都能成为技术进步的推动者和受益者。
        </Description>
      </Section>
      <Section>
        <Subtitle>你是谁?</Subtitle>
        <Description>
          我们欢迎各种背景和经验的人加入我们。无论你是工程师、艺术家、设计师、作家、教师，还是其他职业，只要你对我们的理念感兴趣，并且愿意贡献你的技能和热情，我们都欢迎你。
        </Description>
      </Section>
      <Section>
        <Subtitle>我们提供什么?</Subtitle>
        <Description>
          加入我们的团队，你将有机会与来自世界各地的创新者合作，共同创造一个开放、包容和充满活力的社区。你将有机会学习最新的技术，参与到实际的项目中，并且为构建一个更美好的未来贡献自己的力量。
        </Description>
        <Description>
          此外，我们希望在未来能够为你提供一份不错的薪水。
        </Description>
      </Section>
    </JoinContainer>
  );
};

export default Join;
