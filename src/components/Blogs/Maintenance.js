import React, { useState } from 'react';
import Img1 from '../../images/TyrePressure.jpg';
import styled from 'styled-components';
import Contact2 from '../Contact/Contact2';
import BlogNav from './BlogNav';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown';
import MenuList from '../Navbar/Menu';
import { ButtonMag } from '../Button/ButtonMag';
import Mag from '../../images/leadmag.jpg';
import {
  BtnWrap3,
  ContactWrap,
  H2,
  ImgMag4,
  ImgWrap4,
  LeadHeader3,
  LeadMagnet2,
  LeadP3,
  LeadWrap1,
  LeadWrap3,
  P2,
  Wrapper2,
} from './Credit';
import ContactLeadGen from '../LeadGen/ContactLeadGen';
import BlogLeadGen from '../LeadGen/BlogLeadGen';

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  padding-left: 5px;
  overflow-x: hidden;
  background: rgb(237, 237, 237);
  @media screen and (max-width: 500px) {
    margin-top: 115px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.03fr;
  margin-left: 100px;
  margin-right: 100px;
  background: #fff;
`;
const BlogWrapper = styled.div`
  padding-left: 100px;
  @media screen and (max-width: 1200px) {
    padding-left: 10px;
    max-width: 90vw;
  }
`;
const LeadMagnet = styled.div`
  //border: 2px solid black;
  background: rgb(207, 207, 207);
  width: 500px;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
  }
`;
const HeaderWrapper = styled.div`
  padding: 5px;
`;
const Header = styled.div`
  font-family: 'Oswald';
  font-size: 3.5rem;
  line-height: 1.1;
`;
const Img = styled.img`
  object-fit: cover;
  width: 50%;
`;
const H1Wrap = styled.div`
  padding-top: 75px;
  padding-bottom: 25px;
`;
const Intro = styled.div`
  font-weight: 300;
  padding-top: 50px;
`;
const Hook = styled.div`
  padding-top: 20px;
  font-weight: 400;
`;
const Para = styled.div`
  font-weight: 300;
`;
const ParaH = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  padding-bottom: 15px;
  padding-top: 50px;
`;
const A = styled.a`
  color: blue;
  &:hover {
    color: purple;
  }
`;
const Date = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  padding-top: 15px;
`;
const AccDate = styled.span`
  font-weight: 400;
`;
const ContactHeader = styled.div`
  font-weight: 400;
  font-size: 2rem;
  padding-top: 75px;
  text-align: center;
`;
const Div = styled.div`
  padding-bottom: 10px;
`;
const Span = styled.span`
  //font-style: italic;
`;
const LeadWrap = styled.div`
  position: fixed;
  top: 22.5%;
  right: 6.8%;

  z-index: 0;
  font-weight: 500;
  height: 500px;
  padding-left: 50px;
  padding-top: 30px;
  width: 500px;
  //padding-right: 50px;
  background: #fff;
  @media screen and (max-width: 1500px) {
    right: 7.2%;
  }
  @media screen and (max-width: 1350px) {
    right: 2%;
  }
  @media screen and (max-width: 1300px) {
    right: -5%;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const LeadHeader = styled.div`
  color: rgb(178, 12, 78);
  font-size: 1.8rem;
  margin-right: 50px;
  //position: fixed;
  //right: 12.5%;
`;
const LeadP = styled.div`
  // position: fixed;
  // top: 62.5%;
  font-weight: 300;
  //right: 8%;
  max-width: 350px;
  margin-left: 25px;
  margin-top: 40px;
  // padding-top: 50px;
  //text-align: center;
`;
const BtnWrap = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-top: 25px;
  text-align: center;
  // position: fixed;
  top: 72.5%;
  @media screen and (max-width: 500px) {
    margin-left: 50px;
  }
`;
const LeadWrap2 = styled.div`
  z-index: 0;
  font-weight: 500;
  height: 550px;
  padding-left: 185px;
  padding-top: 30px;
  display: none;
  background: rgb(237, 237, 237);
  width: 100vw;
  //padding-right: 50px;
  //background: #fff;
  @media screen and (max-width: 1200px) {
    display: grid;
  }
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    height: 500px;
  }
`;
const LeadHeader2 = styled.div`
  color: rgb(178, 12, 78);
  font-size: 1.8rem;
  margin-right: 200px;
  //position: fixed;
  //right: 12.5%;
`;
const LeadP2 = styled.div`
  font-weight: 300;
  right: 8%;
  max-width: 350px;
  // padding-top: 50px;
  //text-align: center;
  @media screen and (max-width: 1200px) {
    padding-top: 25px;
  }
`;
const BtnWrap2 = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  margin-top: 25px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    margin-left: 25px;
    margin-top: 0px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 50px;
    margin-top: 0px;
  }
  @media screen and (max-width: 380px) {
    margin-left: 35px;
    //height: 500px;
  }
`;
const ImgWrap = styled.div`
  //position: fixed;
  top: 35%;
  right: 6%;
  z-index: 1;
  margin-left: 50px;
  margin-top: 25px;
  max-height: 1000px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const ImgWrap2 = styled.div`
  display: none;
  z-index: 1;
  max-height: 1000px;
  @media screen and (max-width: 1200px) {
    display: inline;
    //margin-left: 25px;
  }
  @media screen and (max-width: 500px) {
    display: inline;
    margin-left: 50px;
  }
`;
const ImgMag = styled.img`
  width: 400px;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  margin-left: -50px;
  @media screen and (max-width: 1200px) {
    width: 450px;
    //paddi-bottom: 25px;
  }
`;
const P = styled.p`
  font-weight: 300;
`;
const ImgWrap3 = styled.div``;
const ImgMag3 = styled.img``;
const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const H = styled.h1`
  color: rgb(178, 12, 98);
  margin-right: 25px;
`;
const WrapWrapper = styled.div``;
const Maintenance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <MenuList />
      <Container>
        <BlogNav />
        <Wrapper2>
          <BlogWrapper>
            <HeaderWrapper>
              <H1Wrap>
                <Header>
                  10 Car Maintenance Tips to Keep Your Vehicle Running Smoothly
                </Header>
                <Date>
                  Published on <AccDate>19/02/2023</AccDate>
                </Date>
              </H1Wrap>
              <Img src={Img1} alt="car dealership" />
            </HeaderWrapper>

            <Intro>
              Keeping your car running smoothly is essential for its longevity
              and your safety on the road. Regular car maintenance can prevent
              breakdowns, save you money, and improve your vehicle's
              performance. In this blog post, we'll share 10 car maintenance
              tips to help you keep your vehicle running smoothly.
            </Intro>
            <Hook>Here are 10 tips to keep your car running smoothly:</Hook>
            <Para>
              <ParaH>1. Check Your Oil Regularly:</ParaH>
              Your car's engine needs oil to function properly. Check your oil
              level at least once a month, and top it off if it's low. Change
              your oil every 5,000-7,500 miles, or as recommended by your car's
              manufacturer.
            </Para>

            <Para>
              <ParaH>2. Keep Your Tires Inflated:</ParaH> Proper tire inflation
              is essential for your car's handling and fuel efficiency. Check
              your tire pressure at least once a month and keep it at the
              recommended level. Rotate your tires every 5,000-7,500 miles to
              ensure even wear.
            </Para>
            <Para>
              <ParaH>3. Change Your Air Filter:</ParaH> A dirty air filter can
              reduce your car's performance and fuel efficiency. Change your air
              filter every 15,000-30,000 miles, or as recommended by your car's
              manufacturer.
            </Para>
            <Para>
              <ParaH>4. Check Your Brakes: </ParaH> Your brakes are essential
              for your safety on the road. Check your brake pads and rotors
              regularly for wear and tear. Replace them as needed to ensure your
              brakes are working properly.
            </Para>
            <Para>
              <ParaH>5. Replace Your Windshield Wipers:</ParaH> Your windshield
              wipers are essential for visibility in rainy or snowy conditions.
              Replace them every 6-12 months, or as soon as you notice streaks
              or skipping.
            </Para>
            <Para>
              <ParaH>6. Check Your Battery:</ParaH> Your car's battery is
              essential for starting your engine. Check your battery terminals
              regularly for corrosion and clean them as needed. Replace your
              battery every 3-5 years, or as recommended by your car's
              manufacturer.
            </Para>
            <Para>
              <ParaH>7. Inspect Your Belts and Hoses:</ParaH> Your car's belts
              and hoses are essential for the engine's operation. Inspect them
              regularly for cracks or signs of wear. Replace them as needed to
              prevent breakdowns.
            </Para>
            <Para>
              <ParaH>8. Check Your Coolant:</ParaH> Your car's engine needs
              coolant to prevent overheating. Check your coolant level regularly
              and top it off if it's low. Replace your coolant every
              30,000-50,000 miles, or as recommended by your car's manufacturer.
            </Para>
            <Para>
              <ParaH>9. Maintain Your Transmission:</ParaH> Your car's
              transmission is essential for shifting gears smoothly. Change your
              transmission fluid every 30,000-50,000 miles, or as recommended by
              your car's manufacturer.
            </Para>
            <Para>
              <ParaH>10. Wash and Wax Your Car:</ParaH> Regular washing and
              waxing can help protect your car's paint from damage and rust.
              Wash your car at least once a month and wax it every 6-12 months
              to keep it looking new.
            </Para>
            <Para>
              <ParaH>Takeaway: </ParaH>In conclusion, regular car maintenance is
              essential for keeping your vehicle running smoothly. Follow these
              10 car maintenance tips to prevent breakdowns, save money, and
              improve your car's performance. By taking care of your car, you'll
              ensure its longevity and your safety on the road.
              <Hook>
                A car plays an important role in your life, take care of it.
              </Hook>
            </Para>
            <ContactWrap>
              <ContactHeader>Any Question? Drop us an email</ContactHeader>
              <Contact2 />
            </ContactWrap>
          </BlogWrapper>
          <LeadMagnet2>
            <LeadWrap1>
              {/* <LeadHeader3>Buy a car the right way</LeadHeader3>
              <ImgWrap4>
                <ImgMag4 src={Mag} alt="checklist" />
              </ImgWrap4>

              <LeadP3>
                In a simple checklist, we outline the essential steps involved
                in the car buying process.
              </LeadP3>

              <BtnWrap>
                <a href="https://mailchi.mp/9219191fa4de/the-ultimate-car-buying-checklist">
                  <ButtonMag>Download The Checklist Now</ButtonMag>
                </a>
              </BtnWrap> */}
              <BlogLeadGen />
            </LeadWrap1>
            {/* <Center>
              <LeadWrap3>
                <H2>Buy a car the right way</H2>

                <ImgWrap3>
                  <ImgMag4 src={Mag} alt="checklist" />
                </ImgWrap3>
                <P2>
                  In a simple checklist, we outline the essential steps involved
                  in the car buying process.
                </P2>

                <BtnWrap3>
                  <a href="https://mailchi.mp/9219191fa4de/the-ultimate-car-buying-checklist">
                    <ButtonMag>Download The Checklist Now</ButtonMag>
                  </a>
                </BtnWrap3>
              </LeadWrap3>
            </Center> */}
            <ContactLeadGen />
          </LeadMagnet2>
        </Wrapper2>
      </Container>
    </>
  );
};

export default Maintenance;
