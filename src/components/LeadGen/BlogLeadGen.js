import React from 'react';
import styled from 'styled-components';

import ImgLead from '../../images/HoriLead.png';

const Container = styled.div`
  background-color: #071023;
  background: rgb(237, 237, 237);
  background-color: #fff;
  height: 100%;
  width: 100%;
  //padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //display: none;
  //position: absolute;
  @media screen and (max-width: 1000px) {
    display: flex;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 5vh;
  }
  @media screen and (max-width: 380px) {
    padding-top: 0px;
  }
`;
const Wrapper = styled.div`
  background: rgb(207, 207, 207);
  background: #fff;
  //background: rgb(237, 237, 237);
  height: 35vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr;
  //position: absolute;
  //display: flex;
`;
const OnTop = styled.div`
  background: rgb(207, 207, 207);

  width: 0;
  height: 0;
  border-left: 100vw solid rgb(237, 237, 237); /* Adjust the width as needed */
  border-bottom: 100px solid #fff;
`;
const WrapperWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeadGen = styled.div`
  background: #fff;
  //background: #071023;
  //height: 20vh;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  margin-top: 75px;
  @media screen and (max-width: 1000px) {
    margin-top: 0px;
  }
`;
const LeadImg = styled.img`
  height: 175px;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    height: 175px;
  }
`;
const LeadImgWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 25px;
  align-items: center;
  padding-top: 0px;
`;
const LeadDiv = styled.div`
  //color: #333;
  padding: 25px;
  font-weight: 800;
  color: #000;
  font-size: 1.5rem;
  text-align: center;
  background: transparent;
`;
const Btn = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  //min-width: 50px;
  max-width: 250px;
  transition: 300ms ease-in-out;
  background: rgb(178, 12, 78);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #071023;
    cursor: pointer;
  }
`;
const CTADiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const Div = styled.div`
  padding: 15px;
  font-weight: 400;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const BlogLeadGen = () => {
  return (
    <Container>
      <WrapperWrap>
        <LeadGen>
          <LeadDiv>DISCOVER THE JOY OF HASSLE-FREE CAR SHOPPING:</LeadDiv>
          <LeadImgWrap>
            <LeadImg src={ImgLead} alt="free pdf" />
          </LeadImgWrap>
          <CTADiv>
            <Div>DOWNLOAD OUR FREE E-BOOK NOW:</Div>
            <a href="https://mailchi.mp/2c27f972723c/the-ultimate-car-buying-checklist">
              <BtnWrap>
                <Btn>DOWNLOAD THE E-BOOK</Btn>
              </BtnWrap>
            </a>
          </CTADiv>
        </LeadGen>
      </WrapperWrap>
    </Container>
  );
};

export default BlogLeadGen;
