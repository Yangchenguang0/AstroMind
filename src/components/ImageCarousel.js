import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bg1 from '../assets/bg1.jpeg';
import bg2 from '../assets/bg2.jpeg';
import bg3 from '../assets/bg3.jpeg';
import bg4 from '../assets/bg4.jpeg';
import bg5 from '../assets/bg5.jpeg';

const images = [bg1, bg2, bg3, bg4, bg5];

const SliderWrapper = styled.div`
  .slick-slider {
    height: 100vh;
    width: 100%;
  }
  .slick-slide div {
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
`;

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ImageCarousel;
