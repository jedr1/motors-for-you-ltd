import React, { useState } from 'react';
import styled from 'styled-components';
import './Hero.css';
import Img1 from '../../images/Thirds.jpg';
import Img2 from '../../images/golf.jpg';
import { Button } from '../Button/ButtonElements';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroSection = styled.section`
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  z-index: 10;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroImage = styled.img`
  background-position: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transition: 1s ease;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    transition-duration: 1s;
    transform: scale(1.08);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const HeroImage2 = styled.img`
  background-position: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transition: 1s ease;
  z-index: 10;
  display: none;
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    transition-duration: 1s;
    transform: scale(1.08);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 100vh;
  min-width: 600px;
  max-width: 1600px;
  width: calc(100% - 200px);
  color: #fff;
  background: rgba(0, 0, 0, 0.541);
  padding: 2rem;
  //height: 80%;
  @media screen and (max-width: 1200px) {
    min-width: 1000px;
  }
  @media screen and (max-width: 1100px) {
    min-width: 1000px;
    width: 100vw;
    max-width: 100vw;
  }
  @media screen and (max-width: 500px) {
    height: 70%;
    margin-top: -7.5vh;
    //  margin-left: 300px;
  }
`;
const HeaderWrapper = styled.div`
  //margin-top: 240px;
  @media screen and (max-width: 500px) {
    margin-top: 200px;
  }
`;
const PWrap = styled.div`
  padding-top: 40px;
  width: 400px;
  @media screen and (max-width: 500px) {
    padding-left: 20%;
    font-size: 0.9rem;
  }
`;
const Ptag = styled.p``;
const Wrap = styled.div``;
const BtnWrap = styled.div`
  width: 200px;
  margin-top: 20px;
`;

const Hero = (props) => {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroImage src={Img1} />
        <HeroImage2 src={Img2} />
        <HeroContent>
          <Wrap>
            <HeaderWrapper>
              <div className="header">
                We strive to make buying a car
                <span className="animated-text">
                  <div className="line">Easy</div>
                  <div className="line">Enjoyable</div>
                  <div className="line">Reassuring</div>
                  <div className="line">Successful</div>
                </span>
              </div>
            </HeaderWrapper>
            <PWrap>
              <Ptag>
                We understand the importance of buying the right car. That is
                why we go the extra mile to find the perfect car for you.
              </Ptag>
              <BtnWrap>
                <a
                  href="https://motorsforyou.net/latest-stock/#headeranchor"
                  alt=""
                >
                  <Button primary="true" dark="true">
                    Latest stock
                  </Button>
                </a>
              </BtnWrap>
            </PWrap>
          </Wrap>
        </HeroContent>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
