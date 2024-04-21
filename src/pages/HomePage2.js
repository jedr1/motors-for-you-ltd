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
import MobileLatest2 from '../components/Stock/MobileLatest2';
import Video2 from '../components/Video/index2';
import Hero2 from '../components/HeroSection/index2';
import Stakes2 from '../components/Stakes/Stakes2';
import ValueProp3 from '../components/ValueProp/ValueProp3';
import TestimonialsHome2 from '../components/Value/index2';
import Plan2 from '../components/Plan/index2';
import { Helmet } from 'react-helmet-async';
import HomePage from './HomePage';
import Hero3 from '../components/HeroSection/index3';
import LeadGenerator from '../components/LeadGen/LeadGenerator';
import ContactLeadGen from '../components/LeadGen/ContactLeadGen';

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 250px;
  max-width: 100vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-bottom: 350px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 115px;
  }
`;
const FooterDiv = styled.div`
  width: 100vw;
`;
const ContainerHome2 = styled.div`
  background: url('/images/CarSunset.jpg') fixed center;
  background-position: 100%;
  background-size: 100%;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    height: 180vh;
    background-size: 200%;
  }
  @media screen and (max-width: 600px) {
    height: 190vh;
    background-size: 300%;
    background-position: 200%;
  }
  @media screen and (max-width: 500px) {
    height: 190vh;
  }
  @media screen and (max-width: 380px) {
    height: 190vh;
    background: url('/images/wheel.jpg') fixed center;
    background-size: 220%;
    background-position: 220%;
  }
`;
const Cont = styled.div`
  overflow-x: hidden;
`;
const Div = styled.div`
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const Div2 = styled.div`
  display: none;
  @media screen and (max-width: 550px) {
    display: inherit;
  }
`;
const Stick = styled.div`
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
const HomePage2 = () => {
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
  return (
    <>
      <Cont>
        <Helmet>
          <title>Motors For You Ltd - Nottingham, Burton Joyce</title>
          <meta
            name="description"
            content="We understand the importance of buying the right car. That's why we go the extra mile to find the perfect car for you."
          />
          <link rel="canonical" href="/blog" />
        </Helmet>
        <Div>
          <HomePage />
        </Div>
        <Div2>
          <Container>
            <Stick>
              <Navbar toggle={toggle} className="z-index" />
            </Stick>
            <Dropdown isOpen={isOpen} toggle={toggle} className="z-index" />
            <MenuList className="z-index" />
            <Hero3 className="z-index" />
            <MobileLatest2 className="z-index" />
            <Video2 className="z-index" />
            <Stakes2 className="z-index" />
            <ValueProp3 className="z-index" />
            <ContainerHome2 className="z-index">
              <TestimonialsHome2 className="z-index" />
            </ContainerHome2>
            <Plan2 className="z-index" />
            <NoShow>
              <LeadGenerator />
            </NoShow>
            <ContactLeadGen />
          </Container>
        </Div2>
        <FooterDiv>
          <Footer className="footer" />
        </FooterDiv>
      </Cont>
    </>
  );
};

export default HomePage2;
