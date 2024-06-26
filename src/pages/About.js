import React from 'react';
import styled from 'styled-components';
import missionVideo from '../assets/mission.mp4'; // 示例视频
import wechatQR from '../assets/wechat-qr.png'; // 示例微信二维码图片
import douyinQR from '../assets/douyin-qr.png'; // 示例抖音二维码图片

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #333;
  padding-bottom: 10rem; // 增加底部填充，确保按钮不会被Footer挡住
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0056b3;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 1rem;
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
`;

const CallToAction = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.6rem;
  background: #007bff;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const QRContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const QRItem = styled.div`
  margin: 0 1rem;
  text-align: center;
`;

const QRImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 0.5rem;
`;

const QRLabel = styled.p`
  font-size: 1rem;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>关于我们</Title>
      <SubTitle>我们的使命</SubTitle>
      <Video controls>
        <source src={missionVideo} type="video/mp4" />
        您的浏览器不支持视频标签。
      </Video>
      <Text>智航星是一个开放的创新平台，我们致力于通过通用人工智能和元宇宙技术构建一个由普通人共同参与和塑造的未来世界。</Text>
      <Section>
        <SubTitle>我们的目标</SubTitle>
        <ListContainer>
          <ListItem>技术民主化：让每个人都能参与到AGI的学习和应用中。</ListItem>
          <ListItem>内容共创：鼓励用户创造丰富多彩的元宇宙内容。</ListItem>
          <ListItem>社区自治：通过社区投票、讨论和决策，实现社区自治。</ListItem>
          <ListItem>经济共享：建立一个公平的经济模型，让所有参与者都能获得回报。</ListItem>
        </ListContainer>
      </Section>
      <CallToAction href="/contact">联系我们</CallToAction>
      <QRContainer>
        <QRItem>
          <QRImage src={wechatQR} alt="微信二维码" />
          <QRLabel>微信</QRLabel>
        </QRItem>
        <QRItem>
          <QRImage src={douyinQR} alt="抖音二维码" />
          <QRLabel>抖音</QRLabel>
        </QRItem>
      </QRContainer>
    </AboutContainer>
  );
};

export default About;
