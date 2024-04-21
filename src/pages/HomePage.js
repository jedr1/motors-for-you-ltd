import React, { useEffect, useState } from 'react';
import './HomePage.css';
import styled from 'styled-components';
import Explanatory from '../components/Explanatory';
import Footer from '../components/Footer/Footer';
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjectOne } from '../components/InfoSection/Data';
import Dropdown from '../components/Navbar/Dropdown';
import MenuList from '../components/Navbar/Menu';
import Navbar from '../components/Navbar/Navbar';
import Plan from '../components/Plan';
import ButtonHover from '../components/Practise/ButtonHover';
import Stakes from '../components/Stakes/Stakes';
import FirstStock from '../components/Stock/FirstStock';
import LatestArrivals from '../components/Stock/LatestArrivals';
import MobileLatest from '../components/Stock/MobileLatest';
import RoverSlider from '../components/Stock/Rover/RoverSlider';

import TestimonialsHome from '../components/Value';
import ValueProp from '../components/ValueProp';
import Practise from '../components/ValueProp/Practise';
import ValueProp2 from '../components/ValueProp/ValueProp2';
import Video from '../components/Video';
import { SliderData } from '../data/SliderData';
import PlugIn from '../components/PlugIn.js/PlugIn';
import OnLoad from '../components/Animation/OnLoad';
import Hero2 from '../components/HeroSection/index2';
import { Helmet } from 'react-helmet-async';
import { ScrollRestoration } from 'react-router-dom';
import LeadGenerator from '../components/LeadGen/LeadGenerator';
import ContactLeadGen from '../components/LeadGen/ContactLeadGen';
import Trust from '../components/Trust/Trust';
import TrustpilotWidget from '../components/Trust/Trust';

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 300px;
  max-width: 100vw;

  @media screen and (max-width: 850px) {
    width: 100vw;
    margin-bottom: 400px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 115px;
  }
`;
const FooterDiv = styled.div`
  width: 100vw;
`;
const ContainerHome = styled.div`
  background: url('/images/CarSunset.jpg') fixed center;
  background-position: 100%;
  background-size: 100%;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  height: 100%;
  @media screen and (max-width: 1024px) {
    background-size: 200%;
  }
  @media screen and (max-width: 600px) {
    background-size: 300%;
    background-position: 220%;
  }
  /* @media screen and (max-height: 700px) {
    height: 110vh;
  }
  @media screen and (max-height: 650px) {
    height: 120vh;
  }
  @media screen and (max-height: 570px) {
    height: 140vh;
  }
  @media screen and (max-height: 500px) {
    height: 180vh;
  }
  @media screen and (max-width: 1200px) {
    height: 115vh;
  }
  @media screen and (max-width: 1200px) and (max-height: 700px) {
    height: 125vh;
  }

  @media screen and (max-width: 1024px) {
    height: 180vh;
    background-size: 200%;
  }
  @media screen and (max-width: 600px) {
    height: 140vh;
    background-size: 300%;
    background-position: 220%;
  }
  @media screen and (max-width: 500px) {
    height: 160vh;
  }
  @media screen and (max-width: 380px) {
    background: url('/images/wheel.jpg') fixed center;
    height: 190vh;
    background-size: 220%;
    background-position: 220%;
  } */
`;
const Cont = styled.div`
  overflow-x: hidden;
`;
const First = styled.div`
  position: relative;
  z-index: 999;
`;
const NoShow = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const trustpilotBusinessId = '5885f8ba0000ff00059b4fa1';
  return (
    <>
      <Helmet>
        <title>Motors For You Ltd - Nottingham, Burton Joyce</title>
        <meta
          name="description"
          content="We understand the importance of buying the right car. That's why we go the extra mile to find the perfect car for you."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Cont>
        <Container>
          <First>
            <Navbar toggle={toggle} className="z-index" />
          </First>
          <Dropdown isOpen={isOpen} toggle={toggle} className="z-index" />
          <MenuList className="z-index" />
          <Hero2 className="z-index" />

          <MobileLatest className="z-index" />
          <Video className="z-index" />
          <Stakes className="z-index" />
          <ValueProp2 className="z-index" />
          <Trust />
          <ContainerHome className="z-index">
            <TestimonialsHome className="z-index" />
          </ContainerHome>
          <Plan className="z-index" />
          <NoShow>
            <LeadGenerator />
          </NoShow>
          <ContactLeadGen />
        </Container>
        <FooterDiv>
          <Footer className="footer" />
        </FooterDiv>
      </Cont>
    </>
  );
};

export default HomePage;
