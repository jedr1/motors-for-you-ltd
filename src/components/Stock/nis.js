import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import styled from 'styled-components';
import Img1 from '../../nis/nis1.jpg';
import Img2 from '../../nis/nis2.jpg';
import Img3 from '../../nis/nis3.jpg';
import Img4 from '../../nis/nis4.jpg';
import Img5 from '../../nis/nis5.jpg';
import Img6 from '../../nis/nis6.jpg';
import Img7 from '../../nis/nis7.jpg';
import Img8 from '../../nis/nis8.jpg';
import Img9 from '../../nis/nis9.jpg';
import Img10 from '../../nis/nis10.jpg';
import Img11 from '../../nis/nis11.jpg';
import Img12 from '../../nis/nis12.jpg';
import Img13 from '../../nis/nis13.jpg';
import Img14 from '../../nis/nis14.jpg';
import Img15 from '../../nis/nis15.jpg';
import Img16 from '../../nis/nis16.jpg';
import Img17 from '../../nis/nis17.jpg';
import Img18 from '../../nis/nis18.jpg';
import Img19 from '../../nis/nis19.jpg';
import Img20 from '../../nis/nis20.jpg';
import Img21 from '../../nis/nis21.jpg';
import Img22 from '../../nis/nis22.jpg';
import Img23 from '../../nis/nis23.jpg';
import Img24 from '../../nis/nis24.jpg';
import Img25 from '../../nis/nis25.jpg';
import Img26 from '../../nis/nis26.jpg';
import Img27 from '../../nis/nis27.jpg';
import Img28 from '../../nis/nis28.jpg';
import Img29 from '../../nis/nis29.jpg';
// import Img30 from '../../mit/mit30.jpg';
// import Img31 from '../../mit/mit31.jpg';
// import Img32 from '../../mit/mit32.jpg';

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
  @media screen and (max-width: 600px) {
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
const Nis = () => {
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
    Img23,
    Img24,
    Img25,
    Img26,
    Img27,
    Img28,
    Img29,
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 28 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 28 ? 0 : (prev) => prev + 1);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  console.log(currentIndex);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Background>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <MenuList />
      <Wrapper>
        <Container>
          <SliderWrapper>
            <div className="overflow-hidden flex justify-center align-middle contM">
              <div className=" w-[100vw] h-[450px] relative  boxM">
                <div
                  style={{
                    transform: `translateX(-${
                      currentSlide * (isSmallScreen ? 100 : 50)
                    }vw)`,
                  }}
                  className="w-[2300vw] h-full flex transition-transform duration-1000 img-boxM"
                >
                  <img
                    className="object-cover imgM"
                    src={data[0]}
                    alt=""
                    loading="priority"
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[1]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[2]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[3]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[4]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[5]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[6]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[7]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[8]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[9]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[10]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[11]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[12]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[13]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[14]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[15]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[16]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[17]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[18]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[19]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[20]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[21]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[22]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[23]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[24]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[25]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[26]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[27]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[28]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[29]}
                    alt=""
                  />
                  <img
                    className="w-[100vw] h-[250px] object-cover imgM"
                    src={data[30]}
                    alt=""
                  />
                </div>
                <div className="w-full h-full flex align-middle">
                  <div className="absolute w-fit left-[1%] mx-auto flex gap-8 top-[45%] arrowsM">
                    <div
                      onClick={prevSlide}
                      className="w-14 text-white h-14 border-[1px] border-white flex items-center justify-center hover:cursor-pointer hover:bg-black hover:text-white activ:bg-gray-900 duration-300 arrow-left absolute left-0"
                    >
                      <HiArrowLeft />
                    </div>
                  </div>
                  <div className="absolute w-fit right-[1%] mx-auto flex gap-8 top-[45%] arrowsM">
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
              <DetailsHeader>Nissan Pathfinder</DetailsHeader>
              <SubTitle>
                2.5 dCi, Tekna, SUV, 5 Door, Diesel, Automatic, 2014 / 14 reg.
              </SubTitle>
            </ValueCard2>
            <ValueCard>
              <DetailsPrice>
                Only <strong>£10,990</strong>
              </DetailsPrice>
              <DetailsMiles>94,600 miles</DetailsMiles>
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
                  href="https://www.facebook.com/MotorsForYouLtd/"
                  class="fa fa-facebook"
                ></a>
              </Icon>
              <Icon>
                <a
                  href="https://www.instagram.com/p/C2AnViFiHyn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
          Wow ! Look at this ! One owner, Automatic, 7 seat Pathfinder with full
          service history and MOT until November 2024 with NO advisories ! Had a
          full service at 90,100 miles and is offered with 3 months Nationwide
          warranty.
        </DetailsText>
        <DetailsText>
          Drives great and offers a fantastic specification that includes, not
          least, Factory Sat Nav and Bluetooth, Reversing camera, Sunroof, Full
          leather interior with heated seats and memory function, Electric
          folding mirrors, Alloy wheels, Factory alarm and immobiliser etc.
        </DetailsText>
        <DetailsText>
          H.P.I clear with full report, full owners book pack and spare key.
          Part exchange and finance facilities available. We are open 7 days a
          week from 8a.m until 8p.m. Take a look at our reviews on Trustpilot,
          Facebook and Google. Please call to arrange a viewing and test drive
          by appointment. We look forward to hearing from you !
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

export default Nis;
