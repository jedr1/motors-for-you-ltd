import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import styled from 'styled-components';
import Img1 from '../../landrover-img/Rover3.0.jpg';
import Img2 from '../merc-img/merc2.jpg';
import Img3 from '../merc-img/merc3.jpg';
import Img4 from '../merc-img/merc4.jpg';
import Img5 from '../merc-img/merc5.jpg';
import Img6 from '../merc-img/merc6.jpg';

import Img7 from '../merc-img/merc7.jpg';
import Img8 from '../merc-img/merc8.jpg';
import Img9 from '../merc-img/merc9.jpg';

import Img11 from '../merc-img/merc11.jpg';
import Img12 from '../merc-img/merc12.jpg';
import Img13 from '../merc-img/merc13.jpg';
import Img14 from '../merc-img/merc14.jpg';
import Img15 from '../merc-img/merc15.jpg';
import Img16 from '../merc-img/merc16.jpg';
import Img17 from '../merc-img/merc17.jpg';

import Img19 from '../merc-img/merc19.jpg';
import Img20 from '../merc-img/merc20.jpg';
import Img21 from '../merc-img/merc21.jpg';
import Img22 from '../merc-img/merc22.jpg';
import Img23 from '../merc-img/merc23.jpg';
import Img24 from '../merc-img/merc24.jpg';
import Img25 from '../merc-img/merc25.jpg';
import Img26 from '../merc-img/merc26.jpg';
import Img27 from '../merc-img/merc27.jpg';
import Img28 from '../merc-img/merc28.jpg';
import Img29 from '../merc-img/merc29.jpg';
import Img30 from '../merc-img/merc30.jpg';

import { Button } from '../Button/ButtonElements';
import Contact from '../Contact/Contact';
import Dropdown from '../Navbar/Dropdown';
import MenuList from '../Navbar/Menu';
import Navbar from '../Navbar/Navbar';
import './Slider.css';

const Background = styled.div`
  width: 100%;
  //padding-top: 50px;
  @media screen and (max-width: 500px) {
    //padding-top: 50px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    margin-top: 115px;
  }
`;
const Container = styled.div`
  margin-top: 50px;
`;
const DetailsText = styled.div`
  padding: 10%;
  // padding-left: 40%;
  // padding-right: 40%;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 1rem;
  font-family: 'Poppins';
  font-weight: 300;
`;
const DetailsPrice = styled.h1`
  text-align: center;
  font-family: 'Poppins';
  font-weight: 300;
`;
const DetailsMiles = styled.h2`
  text-align: center;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 1.2rem;
`;
const DetailsHeader = styled.h1`
  font-size: 2.5rem;
  font-family: 'Poppins';
  font-weight: 400;
`;
const DetailsContainer = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: -75px;
  }
  @media screen and (max-width: 550px) {
    margin-left: 15px;
  }
`;
const DetailsWrapper = styled.div``;
const Socials = styled.div``;
const ValueCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin-right: 15px;
`;
const ValueCard2 = styled.div`
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //margin-left: -5px;
  margin-right: 15px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin-top: 0px;
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;
const Number = styled.div`
  background: rgba(0, 0, 0, 0.2);
  text-decoration: none;
  outline: none;
  border: 1px solid rgb(178, 12, 78);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  padding: 20px;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    border: 1px solid rgb(178, 12, 78);
  }
`;
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-right: 15px;
`;
const Social = styled.div`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 50px;
`;
const Icons = styled.div`
  text-align: center;
`;
const Paragraph = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 24px;
  margin-top: 25px;
`;
const SliderWrapper = styled.div`
  margin-top: 0%;
`;
const ContactHeader = styled.h1`
  margin-top: 30px;
  font-size: 1.6rem;
`;
const BtnWrap = styled.div`
  max-width: 300px;
  margin-top: 25px;
  margin-bottom: 50px;
`;
const BtnWrapWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const TextWrap = styled.div`
  padding-left: 75px;
  padding-right: 75px;
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
const Icon = styled.span`
  &:hover {
    transform: scale(1.05);
  }
`;
const Rover3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const slides = [
    {
      url: Img1,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  console.log(currentIndex);
  return (
    <Background>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <MenuList />
      <Wrapper>
        <Container>
          <SliderWrapper>
            <div className="slider max-w-[1400px] h-[500px] w-full m-auto py-0 top-0 px-4 relative group">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full  bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className=" absolute top-[50%] -translate-x-[-15%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className=" absolute top-[50%] -translate-x-[15%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {slides.map((slides, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="dots text-2xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </SliderWrapper>
        </Container>
        <DetailsContainer>
          <DetailsWrapper>
            <ValueCard2>
              <DetailsHeader>Land Rover Range Rover</DetailsHeader>
              <SubTitle>
                3.0 TDV6, Vogue, 4×4 , Estate, Automatic, 2104 / 64 Reg.
              </SubTitle>
            </ValueCard2>
            <ValueCard>
              <DetailsPrice>
                Only <strong>£22,900</strong>
              </DetailsPrice>
              <DetailsMiles>114,990 Miles</DetailsMiles>
            </ValueCard>
            <ContactWrapper>
              <Number>
                <i class="fa-solid fa-phone"></i>
                <a href="tel: 0115 9313 131" className="num">
                  {' '}
                  0115 9313 131
                </a>
              </Number>
              <Number>
                <i class="fa-solid fa-phone"></i>
                <a href="tel: 07947 916 916" className="num">
                  {' '}
                  07947 916 916
                </a>
              </Number>
            </ContactWrapper>
            <Social>View car on our socials:</Social>
            <Icons>
              <Icon>
                <a
                  href="https://www.facebook.com/photo/?fbid=699652594941708&set=pcb.699654911608143"
                  class="fa fa-facebook"
                ></a>
              </Icon>
              <Icon>
                <a
                  href="https://www.instagram.com/p/CoH_WfYIHZ-/?img_index=1"
                  class="fa fa-instagram"
                ></a>
              </Icon>
            </Icons>
          </DetailsWrapper>
          <Socials></Socials>
        </DetailsContainer>
      </Wrapper>
      <Paragraph>Details you'll want to know:</Paragraph>
      <TextWrap>
        <DetailsText>
          We are delighted to offer this luxury Range Rover Vogue to market.
          Great colour combination with a great specification and drives
          fantastic. In great condition inside and out. Last serviced at Land
          Rover Nottingham at 110,860 miles. MOT until 25th November 2023 and is
          offered with 3 months Nationwide warranty.
        </DetailsText>
        <DetailsText>
          Great specification includes 20inAlloy Wheels – 5 Split Spoke Style 2,
          8in Touch Screen, Acoustic Laminated Windscreen, Adaptive Dynamics,
          Airbags – Curtain, Airbags – Front Passenger, Airbags – Front Side,
          Airbags – Thorax, Auto Dimming Rear View Mirror, Bluetooth Audio
          Streaming, Bluetooth Phone Connection, CBC – Cornering Brake Control,
          Cruise Control, DSC – Dynamic Stability Control, EBD – Electronic
          Brake-Force Distribution, ESP – Electronic Stability Program, ETC –
          Electronic Traction Control, Electric Parking Brake, Electronic Cross
          Linked Air Suspension with Automatic Load Levelling, Front Fog Lights,
          Front Parking Aid with Front Visual Display, Headlight Powerwash,
          Headlights – Automatic, Leather Steering Wheel, Off Road Navigation,
          Power Tailgate – Upper and Lower, Push Button Start, Rear Lights –
          LED, Rear Parking Aid with Visual Display, Rear View Camera, Roof –
          Fixed Panoramic, Seats – Driver Memory, Steering Column – Electric
          Tilt – Reach and Rake Adjustable, Steering Wheel – Heated, Subwoofer,
          TPMS – Tyre Pressure Monitoring System, TV – Digital Receiver, Trailer
          Stability Control, Voice Control – Say What You See, Volumetric Alarm
          etc.
        </DetailsText>
        <DetailsText>
          Part exchange and finance facilities available. Nationwide delivery
          available – ask for details. We are open 7 days a week from 8am until
          8pm. Check out our reviews on Trustpilot and Facebook. Call to arrange
          a viewing and test drive by appointment. We look forward to hearing
          from you !
        </DetailsText>
      </TextWrap>
      <ContactHeader>Contact us regarding this listing:</ContactHeader>
      <BtnWrapWrap>
        <BtnWrap>
          <Button to="/contact">Contact Us</Button>
        </BtnWrap>
      </BtnWrapWrap>
    </Background>
  );
};

export default Rover3;
