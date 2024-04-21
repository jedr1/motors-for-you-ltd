import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { BenData } from './BenData';
import { ValueCard, ValueIcon, ValueH2, ValueP } from './ValueElements';
import { Button } from '../Button/ButtonElements';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 80vh;
  padding: 25px;
  color: #fff;
  background-color: rgb(220, 220, 220);

  @media screen and (max-width: 1024px) {
    height: 170vh;
    padding-top: 250px;
    //padding-bottom: 100px;
  }
  @media screen and (max-width: 400px) {
    height: 200vh;
  }
  @media screen and (max-width: 380px) {
    height: 215vh;
  }
  @media screen and (max-width: 600px) {
    padding-right: 0;
    padding-left: 0;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
`;
const Wrapper = styled.div`
  top: 0;
  padding-top: 75px;
  padding-bottom: 100px;
  margin-top: -300px;
  background: #000;
`;
const ContentWrapper = styled.div`
  margin-right: 70%;
  padding-left: 50px;
  @media screen and (max-width: 1024px) {
    margin-right: 0%;
  }
  @media screen and (max-width: 400px) {
    padding-left: 30px;
  }
`;

const OfferList = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  font-family: 'Poppins';
  font-weight: 300;
  padding-bottom: 20px;
`;
const I = styled.i`
  color: rgb(178, 12, 78);
  font-size: 1rem;
  margin-top: 5px;
`;
const Header = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  padding-top: 20px;
  margin-bottom: 25px;
  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    width: 300px;
  }
`;
const SliderWrapper = styled.div`
  margin-left: 30%;
  margin-top: -575px;
  padding-right: 100px;
  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #000;
  @media screen and (max-width: 1024px) {
    margin-top: 0px;
    margin-left: 0;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const BtnWrap = styled.div`
  width: 125px;
  margin-top: 25px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueProp3 = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <Wrapper>
        <ContentWrapper>
          <Header>What you'll enjoy by working with Motors For You:</Header>
          <OfferList>
            <I className="fa-solid fa-circle-check" />
            <div>Excellent customer service</div>
          </OfferList>
          <OfferList>
            <I className="fa-solid fa-circle-check" />
            <div>Part exchange and finance facilities</div>
          </OfferList>
          <OfferList>
            <I className="fa-solid fa-circle-check" />
            <div>Free 7 day driveaway insurance</div>
          </OfferList>
          <OfferList>
            <I className="fa-solid fa-circle-check" />
            <div>H.P.I checked</div>
          </OfferList>
          <OfferList>
            <I className="fa-solid fa-circle-check" />
            <div>Nationwide Delivery</div>
          </OfferList>
          <OfferList>
            <I className="fa-solid fa-circle-check" />
            <div>Open 7 days a week</div>
          </OfferList>
          <BtnWrap>
            <Button to="/benefits">Benefits</Button>
          </BtnWrap>
        </ContentWrapper>
        <SliderWrapper>
          <Slider {...settings}>
            {BenData.map((item) => (
              <CardWrapper>
                <Link to="/benefits">
                  <ValueCard>
                    <ValueIcon src={item.img} />
                    <ValueH2>{item.h1}</ValueH2>
                    <ValueP>{item.Ptag}</ValueP>
                  </ValueCard>
                </Link>
              </CardWrapper>
            ))}
          </Slider>
        </SliderWrapper>
      </Wrapper>
    </Container>
  );
};

export default ValueProp3;
