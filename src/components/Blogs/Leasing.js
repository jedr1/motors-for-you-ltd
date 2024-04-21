import React, { useState } from 'react';
import Img1 from '../../images/Leasing.jpg';
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
  overflow-x: hidden;
  padding-left: 5px;
  background: rgb(237, 237, 237);
  width: 100%;
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
const ImgWrap3 = styled.div`
  //display: none;
`;
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
const Leasing = () => {
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
                  Benefits of leasing vs buying a car from a dealership
                </Header>

                <Date>
                  Published on <AccDate>19/02/2023</AccDate>
                </Date>
              </H1Wrap>
              <Img src={Img1} alt="car dealership" />
            </HeaderWrapper>

            <Intro>
              When it comes to getting a new car, one of the biggest decisions
              you'll need to make is whether to lease or buy. Each option has
              its own set of advantages and disadvantages, so it's important to
              weigh your options carefully. In this blog post, we'll explore the
              benefits of leasing vs. buying a car from a dealership, and help
              you make an informed decision.
            </Intro>
            <Hook>
              We will help you make an informed decision about which option is
              best for you.
            </Hook>
            <Intro>
              Leasing a car is like renting it for a longer period of time,
              usually a few years. Instead of buying the car outright and owning
              it, you pay a monthly fee to use the car during the lease term. At
              the end of the lease term, the lessee typically has the option to
              return the asset to the lessor, renew the lease, or purchase the
              car outright.
            </Intro>
            <Para>
              <ParaH>1. Lower Monthly Payments:</ParaH>
              One of the biggest benefits of leasing a car is that the monthly
              payments are typically lower than buying. This is because you're
              only paying for the depreciation of the car during the lease term,
              rather than the full value of the car.
            </Para>
            <Para>
              <ParaH>2. No Down Payment:</ParaH> When you lease a car, you
              typically don't need to make a down payment - the money paid
              upfront towards the total cost of the car. This can be a
              significant advantage if you don't have a lot of money saved up or
              don't want to tie up your cash.
            </Para>
            <Para>
              <ParaH>3. No Need to Worry About Resale Value:</ParaH> When you
              buy a car, you'll need to worry about its resale value when it's
              time to sell it. With a lease, you don't need to worry about this
              since you'll be returning the car to the dealership at the end of
              the lease term.
            </Para>
            <Para>
              <ParaH>4. Lower Maintenance Costs: </ParaH>Since you're typically
              leasing a new car, you won't have to worry about maintenance costs
              as much as you would if you bought an older car. Most leases come
              with a warranty that covers maintenance and repairs.
            </Para>
            <Para>
              <ParaH>5. Ability to Drive a New Car More Frequently:</ParaH> If
              you like to have the latest and greatest car models, leasing can
              be a great option. With a lease, you can return the car at the end
              of the term and lease a new car. This means you'll always have
              access to the latest technology and features.
            </Para>
            <Para>
              <ParaH>6. Tax Benefits:</ParaH> Leasing a car can provide you with
              certain tax benefits. Depending on your business structure, you
              may be able to deduct some or all of your lease payments as a
              business expense.
            </Para>
            <Intro>
              On the other hand, buying a car from a dealership has its own set
              of benefits:
            </Intro>
            <Para>
              <ParaH>1. Ownership:</ParaH> When you buy a car, you own it
              outright. This means you can modify it, sell it, or trade it in
              whenever you want.
            </Para>
            <Para>
              <ParaH>2. No Mileage Restrictions:</ParaH> When you lease a car,
              you'll typically have a mileage restriction. If you go over this
              limit, you'll need to pay a penalty fee. With a purchased car,
              there are no mileage restrictions.
            </Para>
            <Para>
              <ParaH>3. More Cost-Effective in the Long Run:</ParaH> While
              leasing may be more cost-effective in the short term, buying a car
              can be more cost-effective in the long run. Once you've paid off
              your car loan, you'll own the car outright and won't have any more
              monthly payments.
            </Para>
            <Para>
              <ParaH>Takeaway: </ParaH>In conclusion, whether you should lease
              or buy a car from a dealership depends on your personal
              preferences and financial situation. Leasing can be a great option
              if you want lower monthly payments and like to have a new car
              every few years. Buying can be a better option if you want to own
              your car outright and want to avoid mileage restrictions.
              <Hook>Save money by deciding which option best suits you.</Hook>
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

export default Leasing;
