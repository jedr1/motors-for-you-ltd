import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarData } from './CardData';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100vw;
  background: rgb(220, 220, 220);
  padding: 40px;
  padding-top: 75px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 10px;
    padding-top: 25px;
    padding-bottom: 50px;
  }
  height: 100%;

  /* @media screen and (max-height: 660px) {
    height: 110vh;
  }
  @media screen and (max-height: 600px) {
    height: 120vh;
  }
  @media screen and (max-height: 550px) {
    height: 140vh;
  }
  @media screen and (max-height: 500px) {
    height: 160vh;
  }
  @media screen and (max-width: 500px) {
    height: 90vh;
  }
  @media screen and (max-width: 380px) {
    height: 110vh;
  } */
`;
const Wrapper = styled.div``;
const Header = styled.div`
  padding-bottom: 32px;
  margin-top: -24px;

  font-size: 2rem;
  font-weight: 300;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    margin-top: 0;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
`;

const MobileLatest = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Wrapper>
        <Header>Latest Arrivals</Header>
        <Slider {...settings}>
          {CarData.map((item) => (
            <CardWrapper>
              <CardItem
                src={item.linkImg}
                text={item.title}
                text2={item.text}
                label={item.label}
                path={item.path}
                price={item.price}
                miles={item.miles}
              />
            </CardWrapper>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default MobileLatest;
