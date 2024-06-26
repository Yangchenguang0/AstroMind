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

const VideoCarousel = ({ onLoadComplete }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
    }, 3000); // 每3秒切换一次视频

    if (onLoadComplete) {
      onLoadComplete(videoRefs);
    }

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <>
      {videos.map((video, index) => (
        <VideoBackground
          key={index}
          ref={el => (videoRefs[index] = el)}
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
