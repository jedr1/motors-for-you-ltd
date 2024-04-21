import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import Animated from '../Animation/Animated';

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
  position: relative;
  z-index: 30;
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
  margin-left: 8%;
  //padding-right: 50px;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 250px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 200px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 150px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 7.5px;
    grid-gap: 335px;
  }
`;
const PostWrapper2 = styled.div`
  margin-top: 450px;
  margin-left: 8%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    //margin-left: 0%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    grid-template-columns: 1fr;
    grid-gap: 325px;
    margin-top: 400px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 335px;
  }
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 250px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 200px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 150px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 7.5px;
    grid-gap: 335px;
  }
`;
const PostWrapper3 = styled.div`
  margin-top: 450px;
  margin-left: 8%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    grid-template-columns: 1fr;
    grid-gap: 325px;
    margin-top: 400px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 335px;
  }
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 250px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 200px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 150px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 7.5px;
    grid-gap: 335px;
  }
`;
const PostWrapper4 = styled.div`
  margin-top: 450px;
  margin-left: 8%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    grid-template-columns: 1fr;
    grid-gap: 325px;
    margin-top: 400px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 335px;
  }
  @media screen and (max-width: 1300px) {
    grid-gap: 100px;
    //margin-left: 0;
    //margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 250px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 200px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 150px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 400px;
    margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 7.5px;
    grid-gap: 335px;
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
  height: 270vh;
  @media screen and (max-width: 1100px) {
    height: 520vh;
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

const BlogNav = () => {
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
  );
};

export default BlogNav;
