import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button/ButtonElements';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const InfoContainer = styled.div`
  max-width: 100vw;
  padding-bottom: 25px;
  //padding-top: 75px;
  background: rgb(220, 220, 220);
  //padding-bottom: 50px;
  height: 100%;
  /* @media screen and (max-width: 768px) {
    height: 90vh;
  }
  @media screen and (max-width: 600px) {
    height: 75vh;
  }
  @media screen and (max-width: 400px) {
    height: 90vh;
  } */
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;

  width: 100%;
  background: #fff;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;
  padding-top: 75px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    //height: 600px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  background-color: #fff;

  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 100px;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 1200px) {
    grid-gap: 10px;
  }
  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    grid-gap: 0;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 50px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 00px;
  }
`;

export const TopLine = styled.p`
  background: rgb(178, 12, 78);
  width: 215px;
  padding: 0.6rem;
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  // text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(72, 72, 72);
  font-weight: 400;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  @media screen and (max-width: 900px) {
    margin-top: 0%;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 99.5%;
  height: 100%;
`;
const Pink = styled.span`
  color: rgb(178, 12, 78);
`;
const Video = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1 data-aos="fade-right">
              <TextWrapper>
                <Heading>
                  Fuel your <Pink>journey</Pink>
                </Heading>
                <Subtitle>
                  Wherever you are going, go in a car that's perfect for you
                </Subtitle>
                <BtnWrap>
                  <Button to="/contact" primary="true" dark="true">
                    Contact Us
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 data-aos="fade-left">
              <ImgWrap>
                <IFrame
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VPO8q9Wh_Wg?si=d8AWvjjckpnjWBb4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></IFrame>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Video;
