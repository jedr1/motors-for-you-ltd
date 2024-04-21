import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import styled from 'styled-components';
import Img1 from '../../hyundai/h1.jpg';
import Img2 from '../../hyundai/h2.jpg';
import Img3 from '../../hyundai/h3.jpg';
import Img4 from '../../hyundai/h4.jpg';
import Img5 from '../../hyundai/h5.jpg';
import Img6 from '../../hyundai/h6.jpg';

import Img7 from '../../hyundai/h7.jpg';
import Img8 from '../../hyundai/h8.jpg';
import Img9 from '../../hyundai/h9.jpg';
import Img10 from '../../hyundai/h10.jpg';
import Img11 from '../../hyundai/h11.jpg';
import Img12 from '../../hyundai/h12.jpg';
import Img13 from '../../hyundai/h13.jpg';
import Img14 from '../../hyundai/h14.jpg';
import Img15 from '../../hyundai/h15.jpg';
import Img16 from '../../hyundai/h16.jpg';
import Img17 from '../../hyundai/h17.jpg';
import Img18 from '../../hyundai/h18.jpg';
import Img19 from '../../hyundai/h19.jpg';
import Img20 from '../../hyundai/h20.jpg';
import Img21 from '../../hyundai/h21.jpg';
import Img22 from '../../hyundai/h22.jpg';

import { Button } from '../Button/ButtonElements';
import Contact from '../Contact/Contact';
import Dropdown from '../Navbar/Dropdown';
import MenuList from '../Navbar/Menu';
import Navbar from '../Navbar/Navbar';
import './Slider.css';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

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
  margin-right: 15px;
  transition: all 0.2s ease-in-out;
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
const Icon = styled.span`
  &:hover {
    transform: scale(1.05);
  }
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
const Hyundai = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 21 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 21 ? 0 : (prev) => prev + 1);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(currentIndex);
  return (
    <Background>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <MenuList />
      <Wrapper>
        <Container>
          <SliderWrapper>
            <div className="overflow-hidden flex justify-center align-middle cont">
              <div className=" w-[100vw] h-[350px] relative  box">
                <div
                  style={{
                    transform: `translateX(-${
                      currentSlide * (isSmallScreen ? 100 : 50)
                    }vw)`,
                  }}
                  className="w-[2300vw] h-full flex transition-transform duration-1000 img-box"
                >
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[0]}
                    alt=""
                    loading="priority"
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[1]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[2]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[3]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[4]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[5]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[6]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[7]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[8]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[9]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[10]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[11]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[12]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[13]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[14]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[15]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[16]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[17]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[18]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[19]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[20]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[21]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover img"
                    src={data[22]}
                    alt=""
                  />
                </div>
                <div className="w-full h-full flex align-middle">
                  <div className="absolute w-fit left-[1%] mx-auto flex gap-8 top-[45%] arrows">
                    <div
                      onClick={prevSlide}
                      className="w-14 text-white h-14 border-[1px] border-white flex items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white activ:bg-gray-900 duration-300 arrow-left absolute left-0"
                    >
                      <HiArrowLeft />
                    </div>
                  </div>
                  <div className="absolute w-fit right-[1%] mx-auto flex gap-8 top-[45%] arrows">
                    <div
                      onClick={nextSlide}
                      className="w-14 h-14 text-white border-[1px] border-white flex items-center justify-center hover:cursor-pointer  hover:bg-black hover:text-white activ:bg-gray-900 duration-300 arrow-right"
                    >
                      <HiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SliderWrapper>
        </Container>
        <DetailsContainer>
          <DetailsWrapper>
            <ValueCard2>
              <DetailsHeader>Hyundai i30</DetailsHeader>
              <SubTitle>
                1.4 Blue Drive, SE, 5 Door Hatchback, 6 speed manual, 2015 / 65
                reg.
              </SubTitle>
            </ValueCard2>
            <ValueCard>
              <DetailsPrice>
                Only <strong>£7,990</strong>
              </DetailsPrice>
              <DetailsMiles>48,140 Miles</DetailsMiles>
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
                  href="https://www.facebook.com/photo/?fbid=806750364231930&set=pcb.806751090898524"
                  class="fa fa-facebook"
                ></a>
              </Icon>
              <Icon>
                <a
                  href="https://www.instagram.com/p/CuuB9eXtSW0/?img_index=11"
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
          This Hyundai was previously supplied by ourselves. It offers a really
          good specification with the benefit of having a well maintained
          service history. Drives nice and smooth with a 6 speed gearbox.
        </DetailsText>
        <DetailsText>
          Specification includes 16in Alloy Wheels, Air Conditioning, Alarm,
          Armrest – Rear Centre, Automatic Dimming Rear View Mirror, Bluetooth
          Connectivity, Chrome Effect Interior Door Handles, Cruise Control with
          Speed Limiter, Door Handles – Body Coloured, EBD – Electronic Brake
          Force Distribution, ESP – Electronic Stability Programme, Electric
          Adjustment and Heated Door Mirrors, Flex Steering, Front Fog Lights,
          Front Map Reading Lights, Front Passenger Airbag De-Activation Switch,
          Gear Knob – Leather, Glove Compartment with Cooling Function, Head
          Restraints – Front and Rear with Vertical Adjustment, Headlights –
          Static Bending, Hood Insulator, Ignition Socket Illumination, Parking
          Sensors – Rear, Passenger Seat Height Adjustment – Manual, Pollen
          Filter, Rear Spoiler, Seatbelt Reminder, Seats – 60-40 Split Folding
          Rear, Sun Visors with Vanity Mirrors and Illumination, Tyre Pressure
          Monitoring System – TPMS, USB and AUX Connections, VSM – Vehicle
          Stability Management, Voice Control etc.
        </DetailsText>
        <DetailsText>
          H.P.I clear with full report, full owners book pack and spare key. We
          are open 7 days a week form 8a.m until 8p.m. Part exchange and finance
          facilities available. Nationwide delivery available – ask for details.
          Take a look a out our reviews on Trustpilot, Google and Facebook.
          Please call to arrange a viewing and test drive by appointment. We
          look forward to hearing from you !
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

export default Hyundai;
