import React, { useState } from 'react';
import Img1 from '../../images/Finance.jpg';
import styled from 'styled-components';
import Contact from '../Contact/Contact';
import Contact2 from '../Contact/Contact2';
import Animated from '../Animation/Animated';
import BlogNav from './BlogNav';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown';
import MenuList from '../Navbar/Menu';
import Mag from '../../images/leadmag.jpg';
import { Button } from '../Button/ButtonElements';
import { ButtonMag } from '../Button/ButtonMag';
import BlogLeadGen from '../LeadGen/BlogLeadGen';
import ContactLeadGen from '../LeadGen/ContactLeadGen';

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
export const Wrapper2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: 100px;
  margin-right: 100px;
  background: #fff;
  @media screen and (max-width: 1500px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    grid-template-columns: 1fr;
  }
`;
export const BlogWrapper2 = styled.div`
  padding-left: 100px;
  max-width: 90vw;
  @media screen and (max-width: 1400px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 40px;
    margin-right: 40px;
  }
`;
export const LeadMagnet2 = styled.div`
  //border: 2px solid black;
  background: rgb(207, 207, 207);
  width: 450px;
  height: 100vh;
  //margin-left: 25px;
  display: flex;
  position: fixed;
  left: 67.5%;
  top: 0;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1400px) {
    //width: 300px;
    margin-left: 50px;
    //left: 0;
    right: 0;
  }
  @media screen and (max-width: 1200px) {
    position: static;
    width: 100vw;
    margin-left: 0;
    background: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-left: 0;

    //position: static;
    //height: 50vh;
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
export const LeadWrap1 = styled.div`
  // position: fixed;
  top: 22.5%;
  right: 6.8%;
  margin-top: 100px;
  z-index: 0;
  font-weight: 500;
  height: 500px;
  //padding-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
  //padding-right: 50px;
  background: #fff;
  @media screen and (max-width: 1500px) {
    //right: 0;
  }
  @media screen and (max-width: 1400px) {
    //width: 300px;
  }
  @media screen and (max-width: 1350px) {
    //right: 2%;
  }
  @media screen and (max-width: 1300px) {
    right: -5%;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const LeadHeader3 = styled.div`
  color: rgb(178, 12, 78);
  font-size: 1.8rem;
  //margin-right: 50px;
  //font-size: 1rem;
  @media screen and (max-width: 1300px) {
    font-size: 1.5rem;
    text-align: center;
  }
  //position: fixed;
  //right: 12.5%;
`;
export const LeadP3 = styled.div`
  // position: fixed;
  // top: 62.5%;
  font-weight: 300;
  //right: 8%;
  //max-width: 350px;
  //margin-left: 25px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  // padding-top: 50px;
  //text-align: center;
`;
const BtnWrap = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-left: 50px;
  margin-top: 25px;
  text-align: center;
  // position: fixed;
  top: 72.5%;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    margin-left: 50px;
  }
`;
export const LeadWrap3 = styled.div`
  z-index: 0;
  font-weight: 500;
  height: 500px;
  //padding-left: 185px;
  padding-top: 10px;
  margin-top: 25px;
  display: none;
  background: rgb(237, 237, 237);
  width: 100vw;
  //padding-right: 50px;
  //background: #fff;

  @media screen and (max-width: 1200px) {
    //display: grid;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
export const BtnWrap3 = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-left: 25px;
  margin-top: 25px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    //margin-left: 25px;
    margin-top: 0px;
  }
  @media screen and (max-width: 500px) {
    //margin-left: 50px;
    margin-top: 10px;
  }
  @media screen and (max-width: 380px) {
    margin-left: 35px;
    //height: 500px;
  }
`;
export const ImgWrap4 = styled.div`
  //position: fixed;
  top: 35%;
  right: 6%;
  z-index: 1;
  //margin-left: 50px;
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
export const ImgMag2 = styled.img`
  width: 400px;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  //margin-left: -50px;
  @media screen and (max-width: 1200px) {
    width: 450px;
    //paddi-bottom: 25px;
  }
`;
export const P2 = styled.p`
  font-weight: 300;
  max-width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;
const ImgWrap3 = styled.div``;
export const ImgMag4 = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
`;
export const H2 = styled.h1`
  color: rgb(178, 12, 98);
  //margin-right: 25px;
  font-size: 1.7rem;
  margin-bottom: 20px;
`;
const WrapWrapper = styled.div``;
const ZIndex = styled.div``;
export const ContactWrap = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const NavWrap = styled.div``;
const CreditScore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ZIndex>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <MenuList />
      </ZIndex>
      {/* <ImgWrap>
        <ImgMag src={Mag} alt="checklist" />
      </ImgWrap> */}
      <Container>
        <BlogNav />
        <Wrapper2>
          <BlogWrapper2>
            <HeaderWrapper>
              <H1Wrap>
                <Header>Understanding Car Financing</Header>
                <Header>A guide for first time buyers</Header>
                <Date>
                  Published on <AccDate>21/03/2023</AccDate>
                </Date>
              </H1Wrap>
              <Img src={Img1} alt="car dealership" />
            </HeaderWrapper>

            <Intro>
              If you're a first-time car buyer, understanding car financing can
              be a daunting task. In this blog, we will walk you through the
              basics of car financing so that you can make an informed decision
              when purchasing your first car.
            </Intro>
            <Hook>Save money when buying your next car.</Hook>
            <Para>
              <ParaH>1. Types of car financing:</ParaH>
              The first step in understanding car financing is to know the
              different types of financing available. These include loans,
              leases, and hire purchase agreements. At Motors For You we will
              explain the differences between these types of financing and help
              you determine which one is right for you.
            </Para>
            <Para>
              <ParaH>2. Interest rates:</ParaH> Interest rates are an essential
              aspect of car financing, as they determine how much you'll pay in
              total over the life of your loan. When you buy a car using a loan,
              the interest rate is the percentage charged by the lender for
              borrowing money. We'll explain what interest rates we can offer
              you, which will be affected by a variet of factors such as, your
              credit score, the amount of the loan, the length of the loan term,
              and the type of car you are buying.
            </Para>
            <Para>
              <ParaH>3. Loan terms:</ParaH> Loan terms are the length of time
              you have to repay your loan. We'll discuss how loan terms can
              affect your monthly payments and the total cost of your car.
            </Para>
            <Para>
              <ParaH>4. Down payments: </ParaH>A down payment is a sum of money
              you pay upfront to reduce the amount you'll need to borrow. We'll
              explain how down payments work, how they affect your loan, and how
              to determine how much you should put down.
            </Para>
            <Para>
              <ParaH>5. Credit scores:</ParaH>
              <Div>
                {' '}
                Your credit score is an important factor when determining your
                eligibility for a car loan. The credit score is calculated based
                on several factors, including payment history, the amount owed,
                length of credit history, types of credit used, and new credit
                inquiries. Each of these factors has a different weight in the
                calculation of the credit score.
              </Div>
              A higher credit score indicates that the individual is less of a
              credit risk and is more likely to repay their debts on time, while
              a lower credit score indicates a higher credit risk and may result
              in higher interest rates or difficulty obtaining credit. You can
              obtain a free credit report from each of the three major credit
              reporting agencies (Equifax, Experian, and TransUnion) once a
              year.
            </Para>
            <Para>
              <ParaH>6. Getting pre-approved</ParaH> Getting pre-approved for a
              car loan can save you time and money. This involves submitting a
              loan application to a lender, who will review your credit score,
              income, and other factors to determine if you qualify for a loan
              and at what interest rate. Pre-approval gives you an advantage in
              negotiations with dealers because you have a better idea of what
              you can afford, and you can avoid the pressure of financing at the
              dealership.
            </Para>
            <Para>
              <ParaH>Takeaway: </ParaH>By understanding the basics of car
              financing, you can make an informed decision when purchasing your
              first car. By following the steps outlined in this blog, you can
              save money and get the best deal possible.
              <Hook>
                When buying a car, <Span>YOU</Span> should be in the driving
                seat.
              </Hook>
            </Para>
            <ContactWrap>
              <ContactHeader>Any Question? Drop us an email</ContactHeader>
              <Contact2 />
            </ContactWrap>
          </BlogWrapper2>
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

export default CreditScore;
