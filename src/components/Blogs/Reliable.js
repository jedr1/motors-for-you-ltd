import React, { useState } from 'react';
import Img1 from '../../images/Reliable.jpg';
import styled from 'styled-components';
import Contact from '../Contact/Contact';
import Contact2 from '../Contact/Contact2';
import Animated from '../Animation/Animated';
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
  background: rgb(237, 237, 237);
  width: 100%;
  overflow-x: hidden;
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
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    grid-template-columns: 1fr;
  }
`;
const BlogWrapper = styled.div`
  padding-left: 100px;
  @media screen and (max-width: 768px) {
    padding-left: 40px;
    margin-right: 40px;
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

const Reliable = () => {
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
                <Header>How to find a reliable car dealer.</Header>
                <Header>In 5 steps.</Header>
                <Date>
                  Published on <AccDate>19/02/2023</AccDate>
                </Date>
              </H1Wrap>
              <Img src={Img1} alt="car dealership" />
            </HeaderWrapper>

            <Intro>
              Buying a car is one of the most expensive decisions you'll ever
              make and is something that has a massive impact on your daily
              life. Therefore, when it comes to buying a car, finding a reliable
              car dealer is essential; can you imagine spending your hard earned
              money on buying your "dream car" only to find out it breaks down
              every 10 miles. In this blog, we'll discuss the 5 key factors to
              consider when looking for a reliable car dealership.
            </Intro>
            <Hook>A car dealer should have your best interests at heart.</Hook>
            <Para>
              <ParaH>1. Reputation:</ParaH>
              Customer reviews don't lie, so by checking online reviews and
              testimonials on their website, this is one of the best ways to
              determine their reputation. You can also look for online reviews
              from popular platforms such as, Google, Trust Pilot and Facebook.
            </Para>
            <Para>
              <ParaH>2. Customer service:</ParaH> The quality of customer
              service will make or break your car buying process. A good
              dealership should be responsive to your needs and concerns, and
              they should be willing to answer any questions you have. They
              should also be patient with you during the decision-making process
              and not pressure you into making a purchase. You should check what
              previous customers have said about their experience, e.g. from
              testimonials on their website. Remember you should be in the
              driving seat.
            </Para>
            <Para>
              <ParaH>3. Financing:</ParaH> A reliable dealership should offer
              financing options that suit your budget. They should be
              transparent about the terms and conditions of the financing and
              provide you with all the necessary information to make an informed
              decision.
            </Para>
            <Para>
              <ParaH>4. Maintenance and repair services: </ParaH>A reliable
              dealership should also offer maintenance and repair services for
              the vehicles they sell. This will ensure that your car remains in
              good condition and is serviced by qualified technicians.
            </Para>
            <Para>
              <ParaH>5. Experience:</ParaH> A dealership with years of
              experience is likely to be more reliable than a new one.
              Experienced dealerships have a reputation to uphold and have
              likely worked with numerous customers over the years, so they
              understand the importance of providing quality service.
            </Para>
            <Para>
              <ParaH>Takeaway: </ParaH>In conclusion, find a dealership with a
              good reputation, years of experience, financing options, good
              customer service and also provides maintenance and repair
              services, and you will be on your way to find the perfect car for
              you. Why look further than Motors For You (Nottingham) Ltd at{' '}
              <A href="https://motorsforyou.net/">www.motorsforyou.net</A>, on
              the website: they have exceptional reviews from happy customers
              praising their customer experience, they are transparent about
              their financing and their maintainence services, and they have
              over 30 years of experience.
              <Hook>
                Are you gonna let an unreliable car dealer source your next car?
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

export default Reliable;
