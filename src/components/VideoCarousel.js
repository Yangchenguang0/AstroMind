import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backgroundVideo1 from '../assets/background1.mp4';
import backgroundVideo2 from '../assets/background2.mp4';
import backgroundVideo3 from '../assets/background3.mp4';

const videos = [backgroundVideo1, backgroundVideo2, backgroundVideo3];

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
    }, 3000); // 每10秒切换一次视频

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {videos.map((video, index) => (
        <VideoBackground
          key={index}
          active={index === currentVideoIndex}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
      ))}
    </>
  );
};

export default VideoCarousel;
