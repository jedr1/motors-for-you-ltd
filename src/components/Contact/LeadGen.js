import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Img1 from '../../images/leadmag.jpg';
import OfferSVG from '../../images/Checklist.svg';
import { Button } from '../Button/ButtonElements';
import { ButtonMag } from '../Button/ButtonMag';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const OfferWrapper = styled.div`
  margin-top: 10%;
`;
const ContactWrapper = styled.div`
  margin-top: 1%;
`;
const ContainerWrapper = styled.div``;
const Title = styled.h1`
  font-size: 2.5rem;
  padding-top: 50px;
`;
const OfferP = styled.p`
  font-size: 1.2rem;
  //padding: 50px;
  //font-style: italic;
  //margin-top: 10%;

  @media screen and (max-width: 600px) {
    padding: 20px;
    padding-top: 0px;
  }
`;
const OfferTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;

  margin-top: 5%;
  font-style: italic;
  color: rgb(178, 12, 78);
  font-weight: bold;

  @media screen and (max-width: 600px) {
    padding-bottom: 0px;
  }
`;
const OfferPWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const OfferImg = styled.img`
  margin-top: 20%;

  @media screen and (max-width: 600px) {
    margin-top: 0%;
    margin-bottom: 10%;
  }
`;
const ContactHeader = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 0%;
`;
const LeadMag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ImgWrap = styled.div`
  margin-top: 50px;
`;
const Img = styled.img`
  height: 100%;
  width: 100vw;
`;
const ContentHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;

  margin-top: 5%;
  //font-style: italic;
  color: rgb(178, 12, 78);
  font-weight: bold;

  @media screen and (max-width: 600px) {
    padding-bottom: 0px;
  }
`;
const PWrap = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 25px;
  background: rgb(237, 237, 237);
  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const Content = styled.div``;
const BtnWrap = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  margin-top: 25px;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin-left: 50px;
  }
`;
const LeadGen = () => {
  return (
    <ContainerWrapper>
      <LeadMag>
        <Content>
          <ContentHeader>Buy a car the right way</ContentHeader>
          <PWrap>
            <OfferP>
              In a simple checklist, we outline the essential steps involved in
              the car buying process.
            </OfferP>
          </PWrap>
          <BtnWrap>
            <a href="https://mailchi.mp/9219191fa4de/the-ultimate-car-buying-checklist">
              <ButtonMag>Download The Checklist Now</ButtonMag>
            </a>
          </BtnWrap>
        </Content>
        <ImgWrap>
          <Img src={Img1} alt="car buying checklist" />
        </ImgWrap>
      </LeadMag>

      <iframe
        width="100%"
        height="400"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.772482099012!2d-1.0382800847911495!3d52.98849330915662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c65008abf7d1%3A0x4eea54182affda1e!2sMotors%20for%20You!5e0!3m2!1sen!2suk!4v1675102611604!5m2!1sen!2suk"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </ContainerWrapper>
  );
};

export default LeadGen;
