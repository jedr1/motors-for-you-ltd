import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BenData } from './BenData';
import { ValueCard, Quote, QuoteHeader } from '../Value/ValueElements';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  margin-left: 50%;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
`;
const Practise = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {BenData.map((item) => (
          <ValueCard>
            <Quote>
              <i class="fa-solid fa-quote-left"></i>
            </Quote>
            <QuoteHeader>
              The initial consultation was easy, friendly but more importantly,
              I felt he listened to what I wanted. To my amazement he found the
              car of my dreams in six days.
            </QuoteHeader>
            <div>-Miss Deborah Parr</div>
          </ValueCard>
        ))}
      </Slider>
    </Container>
  );
};

export default Practise;
