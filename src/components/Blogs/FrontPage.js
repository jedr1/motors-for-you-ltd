import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Animated from '../Animation/Animated';
import { Button } from '../Button/ButtonElements';
import BlogCard from './BlogCard';
import Img5 from '../../images/Finance.jpg';
import Img6 from '../../images/Leasing.jpg';
import Img1 from '../../images/Reliable.jpg';
import Img2 from '../../images/CarBuy.jpg';
import Img3 from '../../images/Maintenance.jpg';
import Img4 from '../../images/SnowyCar.jpg';
import Img7 from '../../images/FamilyCar.jpg';
import Img8 from '../../images/TyrePressure.jpg';
import { BlogData } from './BlogData';
import BlogCard2 from './BlogCard2';
import BlogCard3 from './BlogCard3';

const Container = styled.div`
  //height: 350vh;
  width: 100vw;
  overflow-x: hidden;
  @media screen and (max-width: 1250px) {
    //height: 380vh;
  }
`;
const Wrapper = styled.div`
  height: 35vh;
  background: #000;
  background: linear-gradient(
    180deg,
    #000 0% 33%,

    rgba(0, 0, 0, 0.9) 95%,

    rgba(178, 12, 78, 0.8) 100%
  );
  background-position: 100% 100%;
  background-size: 300% 300%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  color: #fff;
  font-family: 'Poppins';
  font-size: 2.5rem;
`;
const SubHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1.2em;
`;
const FakeSub = styled.div`
  color: transparent;
  // font-size: 1.2rem;
`;
const BtnWrap = styled.div`
  max-width: 125px;
  position: relative;
  left: 75%;
`;
const PostWrapper = styled.div`
  //margin-top: 25px;
  //margin-left: 8%;
  //padding-right: 50px;
  margin-left: 25px;
  margin-right: 25px;
  // margin-right: 10%;
  align-items: center;
  display: flex;
  //align-items: center;
  /* 
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px; */
  @media screen and (max-width: 1350px) {
    gap: 25px;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 1300px) {
    //grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }

  @media screen and (max-width: 1325px) {
    //grid-gap: 10px;
    //margin-left: 0;
    //margin-right: 0;
    gap: 100px;
  }
  @media screen and (max-width: 1250px) {
    gap: 50px;
  }
  @media screen and (max-width: 1250px) {
    width: 500px;
  }
  @media screen and (max-width: 1150px) {
    gap: 10px;
  }
  @media screen and (max-width: 1100px) {
    /* grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 250px; */
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    //grid-gap: 400px;
    // margin-left: 200px;
  }
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    //grid-gap: 400px;
    //margin-left: 150px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    //grid-gap: 400px;
    //margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    //margin-left: 150px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 7.5px;
    //grid-gap: 335px;
  }
`;

const WrapWrapper = styled.div``;
const CardWrap = styled.div`
  display: flex;
  //align-items: center;
  justify-content: center;
  grid-gap: -100px;
`;
const Search = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchH = styled.span`
  font-family: 'Poppins';
  padding: 10px;
`;
const SearchWrap = styled.div`
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgb(237, 237, 237);
  grid-gap: -50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const BlogWrap = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  background: #fff;
  //height: 370vh;
  margin-bottom: 25px;
  @media screen and (max-width: 1500px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    //height: 370vh;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const BlogContainer = styled.div`
  background-color: rgb(237, 237, 237);
`;
const Center = styled.div`
  @media screen and (max-width: 1100px) {
    display: flex;
    height: 100%;
    justify-content: center;
    //align-items: center;
  }
`;
const BlogWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #000;
  height: 100px;
  width: 100px;
`;
const Span = styled.span`
  font-style: italic;
`;
const HeaderPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    //padding: 5px;
    margin-left: 0;
    margin-right: 0;
  }
`;
const H = styled.h1`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const H2 = styled.h1`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    font-size: 1.8rem;
  }
`;
const Div = styled.div`
  width: 100%;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media screen and (max-width: 1350px) {
    gap: 30px;
  }
  @media screen and (max-width: 900px) {
    margin-left: 25px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 390px) {
    margin-left: 5px;
  }
`;

const FrontPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <WrapWrapper>
          <div>
            <Header>
              <H>
                <Animated text="The Motors For You Ltd Blog" />
              </H>
              <H2>The Motors For You Ltd Blog</H2>
            </Header>
            {loading ? (
              <FakeSub>Master the art of buying a car</FakeSub>
            ) : (
              <SubHeader data-aos="fade">
                Master the art of buying a car
              </SubHeader>
            )}
          </div>
        </WrapWrapper>
      </Wrapper>
      <BlogContainer>
        <BlogWrap>
          <HeaderPosts>
            Buying a car can be a taunting task. Use this blog to answer any
            questions you may have so you can go to buy your next car with the
            confidence you'll find the perfect car for you.
          </HeaderPosts>

          <PostWrapper>
            <BlogCard2
              header="Understanding Car Financing"
              subh="A guide for first time buyers"
              src={Img5}
              path="/basics-of-car-financing"
              tag="CAR FINANCING"
            />
            <Div>
              <BlogCard3
                header="Invest in Your Well-Being"
                subh="The Benefits of Regular Car Maintenance"
                src={Img3}
                path="/benefits-of-maintenance"
                tag="CAR MAINTENANCE"
              />
              <BlogCard3
                header="Find the Perfect Car for You"
                subh="How to choose the right car for your lifestyle"
                src={Img4}
                path="/find-the-perfect-car"
                tag="CAR SHOPPPING"
              />
            </Div>
          </PostWrapper>
          <PostWrapper>
            <Div>
              <BlogCard3
                header="5 Things To Know "
                subh="Help your car dealer find the perfect car for you"
                src={Img2}
                path="/5-things-to-know"
                tag="HELPFUL TIPS"
              />
              <BlogCard3
                header="Signs of a Reliable Car Dealer"
                subh="Never go to a car dealer you don't trust"
                path="/reliable-car-dealer"
                src={Img1}
                tag="TRUST YOUR DEALER"
              />
            </Div>
            <BlogCard2
              header="Keep Your Car Running Smoothly"
              subh="10 Car Maintenance Tips to Keep Your Vehicle Running Smoothly"
              path="/maintenance-tips"
              src={Img8}
              tag="MAINTENANCE TIPS"
            />
          </PostWrapper>
          <PostWrapper>
            <BlogCard2
              header="Leasing Vs Buying a Car"
              subh="Benefits of leasing vs buying a car from a dealership"
              path="/leasing-vs-buying"
              src={Img6}
              tag="LEASING INFORMATION"
            />
            <Div>
              <BlogCard3
                header="Top Features in a Family Car"
                subh="The top features to look for in a family car"
                path="/top-features-of-a-family-car"
                src={Img7}
                tag="FAMILY CARS"
              />
              <BlogCard3
                header="Find the Perfect Car for You"
                subh="How to choose the right car for your lifestyle"
                src={Img4}
                path="/find-the-perfect-car"
                tag="CAR SHOPPPING"
              />
            </Div>
          </PostWrapper>
          {/* <BlogCard
              header="Invest in Your Well-Being"
              subh="The Benefits of Regular Car Maintenance"
              src={Img3}
              path="/benefits-of-maintenance"
            />
          </PostWrapper>
          <PostWrapper2>
            <BlogCard
              header="Find the Perfect Car for You"
              subh="How to choose the right car for your lifestyle"
              src={Img4}
              path="/find-the-perfect-car"
            />
            <BlogCard
              header="5 Things To Know "
              subh="Help your car dealer find the perfect car for you"
              src={Img2}
              path="/5-things-to-know"
            />
          </PostWrapper2>
          <PostWrapper3>
            <BlogCard
              header="Signs of a Reliable Car Dealer"
              subh="Never go to a car dealer you don't trust"
              path="/reliable-car-dealer"
              src={Img1}
            />
            <BlogCard
              header="Leasing Vs Buying a Car"
              subh="Benefits of leasing vs buying a car from a dealership"
              path="/leasing-vs-buying"
              src={Img6}
            />
          </PostWrapper3>
          <PostWrapper4>
            <BlogCard
              header="Top Features in a Family Car"
              subh="The top features to look for in a family car"
              path="/top-features-of-a-family-car"
              src={Img7}
            />
            <BlogCard
              header="Keep Your Car Running Smoothly"
              subh="10 Car Maintenance Tips to Keep Your Vehicle Running Smoothly"
              path="/maintenance-tips"
              src={Img8}
            />
          </PostWrapper4> */}
        </BlogWrap>
      </BlogContainer>
    </Container>
  );
};

export default FrontPage;
