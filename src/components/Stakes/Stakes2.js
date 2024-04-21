import React from 'react';
import styled from 'styled-components';
import './Stakes.css';
import Img1 from '../../images/Thinking.svg';
import Calm from '../../images/Calm.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const StakesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const VideoWrap = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const StakesContent = styled.div``;
const Offer = styled.div``;
const DontOffer = styled.div`
  margin-left: 10px;
`;
const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const OfferH = styled.div`
  font-size: 2rem;

  padding-top: 35px;
  padding-bottom: 20px;
  font-family: 'Poppins';
`;
const OfferList = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  font-family: 'Poppins';
  font-weight: 300;
  padding-bottom: 65px;
  font-size: 1.1rem;
  //padding-top: 50px;
  padding-left: 25px;
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
const I = styled.i`
  color: rgb(178, 12, 78);
`;

const Heights = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 32px;
  margin-top: 50px;
  background-color: #fff;
  font-size: 1.6rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 500px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-top: 0px;
    margin-bottom: 0;
    font-size: 1.2rem;
  }
`;
const Img = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (max-width: 500px) {
    height: 400px;
    min-width: 200px;
  }
`;
const HeightsP = styled.div`
  height: 200px;
  margin-top: 10%;
  @media screen and (max-width: 500px) {
    margin-top: -100px;
    height: 0;
    text-align: center;
    font-size: 0.5rem;
  }
`;

function Stakes2() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="stakes2">
      <StakesWrapper>
        <StakesContent>
          <h1 className="stakes-header2">
            Don't be left disappointed by dealerships who:
          </h1>
          <Offer>
            <OfferList data-aos="fade-down">
              <I className="fa-solid fa-circle-xmark" />
              <div>Pressure you into buying a car that's not right for you</div>
            </OfferList>
            <OfferList data-aos="fade-down">
              <I className="fa-solid fa-circle-xmark" />
              <div>Rushes you through the process</div>
            </OfferList>
            <OfferList data-aos="fade-down">
              <I className="fa-solid fa-circle-xmark" />
              <div>Lack transparency</div>
            </OfferList>

            <OfferList data-aos="fade-down">
              <I className="fa-solid fa-circle-xmark" />
              <div>
                Overcomplicate the process that should be swift and enjoyable
              </div>
            </OfferList>
          </Offer>
        </StakesContent>
        <VideoWrap src={Img1} alt="thought illustration"></VideoWrap>
      </StakesWrapper>
      <Heights data-aos="fade-up">
        At Motors For You, you will enjoy pleasing consultation with no sales
        pressure
      </Heights>
    </div>
  );
}

export default Stakes2;
