import React from 'react';
import styled from 'styled-components';
import Img1 from '../../images/5MistakesPeopleMake.jpg';
import { Button } from '../Button';
import { Button3 } from '../Button3';
import ImgLead from '../../images/5MistakesPeopleMake.jpg';

const Container = styled.div`
  background-color: #071023;
  background: rgb(237, 237, 237);
  background-color: #fff;
  background: #071023;
  overflow: hidden;
  //height: 70vh;
  width: 100%;
  //padding-top: 20vh;
  //padding-bottom: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //display: none;
  //position: absolute;
  @media screen and (max-width: 1000px) {
    display: flex;
    //padding-bottom: 50px;
    //padding-top: 50px;
  }
  @media screen and (max-width: 500px) {
    //padding-bottom: 5vh;
  }
  @media screen and (max-width: 380px) {
    //padding-top: 0px;
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
  background: rgb(237, 237, 237);
  //background: #071023;
  //height: 20vh;
  width: 100%;
  height: 100%;
  //padding-bottom: 20px;
  //margin-top: 75px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media screen and (max-width: 1000px) {
    margin-top: 0px;
  }
`;
const LeadImg = styled.img`
  height: 250px;
`;
const LeadImgWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 25px;
  align-items: center;
`;
const LeadDiv = styled.div`
  //color: #333;
  padding: 25px;
  font-weight: 500;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  background: #071023;
`;
const Btn = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  //min-width: 50px;
  max-width: 250px;
  transition: 300ms ease-in-out;
  background: #081542;
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
  @media screen and (max-width: 1100px) {
    display: none;
  }
  // text-align: center;
`;
const Div = styled.div`
  font-weight: 500;
  font-family: 'Roboto Slab', serif;
  font-size: 1.5rem;
  color: #333;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  //justify-content: center;
  margin-top: 10px;
`;
const PopUpLead = () => {
  return (
    <Container>
      <WrapperWrap>
        <LeadGen>
          <LeadImgWrap>
            <LeadImg src={ImgLead} alt="free pdf" />
          </LeadImgWrap>
          <CTADiv>
            <Div>TAKE CONTROL OF YOUR PROJECT:</Div>
            <Div>DOWNLOAD OUR FREE PDF NOW</Div>
            <BtnWrap>
              <Btn>DOWNLOAD THE PDF</Btn>
            </BtnWrap>
            <BtnWrap></BtnWrap>
          </CTADiv>
        </LeadGen>
      </WrapperWrap>
    </Container>
  );
};

export default PopUpLead;
