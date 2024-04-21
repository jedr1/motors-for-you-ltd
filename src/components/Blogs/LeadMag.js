import React, { useState } from 'react';
import Img1 from '../../images/CarBuy.jpg';
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
  background: rgb(237, 237, 237);
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

const LeadMag = () => {
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
                  The 5 things to know to help your car dealer find the perfect
                  car for you.
                </Header>
                <Date>
                  Published on <AccDate>19/02/2023</AccDate>
                </Date>
              </H1Wrap>
              <Img src={Img1} alt="car dealership" />
            </HeaderWrapper>

            <Intro>
              Going to a car dealership can be an exciting and overwhelming
              experience, especially if you're a first-time car buyer. However,
              there are 5 things to know that will make the process smoother and
              increase the chances of finding the perfect car for you at a fair
              price. This will also prevent any miss-communications between you
              and your car dealer to ensure you get a good deal.
            </Intro>
            <Hook>
              Here are the 5 things to know to boost your car sales experience:
            </Hook>
            <Para>
              <ParaH>1. Research your desired car and it's price range:</ParaH>
              Before you contact a dealership, make sure you have an
              understanding of the type of car you're after and the price range
              you're willing to pay. You can research the specifications of
              different cars, as well as their average prices. This will give
              you an idea of what to expect when you start negotiating with the
              salesperson.
            </Para>
            <Para>
              Top Tip: You don't have to know the exact car model you want. The
              car dealer is the expert and by having a clear understanding of
              your needs and preferences they will have the resources and
              know-how to find you a great deal.
            </Para>
            <Para>
              <ParaH>2. Get pre-approved for financing:</ParaH> Knowing how much
              financing you're eligible for and at what interest rate will give
              you an idea of what your budget should be. You can get
              pre-approved for financing from your bank or credit union, or even
              from the dealership itself. Having this information in hand will
              make the financing process much smoother.
            </Para>
            <Para>
              <ParaH>3. Don't be afraid to negotiate:</ParaH> Dealerships are in
              the business of making money, so it's natural for them to start
              with a price higher than they are willing to accept. Don't be
              afraid to negotiate the price of the car and any extras, such as
              extended warranties or maintenance plans. If you've done your
              research, you'll know what a fair price is for the car you want.
            </Para>
            <Para>
              <ParaH>4. Test drive the car: </ParaH>You should always test drive
              the car before you buy it. This will give you a feel for the car
              and its handling, as well as an opportunity to check for any
              issues or problems. If the dealership doesn't offer a test drive,
              consider going elsewhere.
            </Para>
            <Para>
              <ParaH>5. Take your time:</ParaH> Buying a car is a big
              investment, so don't rush the process. Take your time to research
              your options, negotiate the price, and read the contract. Don't
              let the salesperson pressure you into making a decision before
              you're ready.
            </Para>
            <Para>
              <ParaH>Takeaway: </ParaH>Going to a car dealership can be a
              daunting experience, but if you've followed these 5 steps, there's
              absolutely no reason why the process won't be smooth and
              reassuring. The 5 steps inclue: research your desired car and its
              price range, get pre-approved for financing, negotiate the price,
              test drive the car, and take your time. Follow these and you'll
              have a great time finding the car of you're dreams!
              <Hook>Be prepared when buying your next car.</Hook>
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

export default LeadMag;
