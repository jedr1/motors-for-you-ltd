import React from 'react';
import styled from 'styled-components';
import { ButtonMag } from '../Button/ButtonMag';
import Mag from '../../images/leadmag.jpg';
const ImgWrap = styled.div`
  position: fixed;
  top: 35%;
  right: 6%;
  z-index: 1;
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
    //margin-left: 50px;
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
  @media screen and (max-width: 768px) {
    margin-left: -20px;
    width: 425px;
  }
`;
const NavWrap = styled.div`
  z-index: 99;
`;
const ZIndex = styled.div`
  z-index: 2;
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

  //padding-right: 50px;
  background: #fff;
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
  position: fixed;
  top: 62.5%;
  font-weight: 300;
  right: 8%;
  max-width: 350px;
  // padding-top: 50px;
  //text-align: center;
`;
const BtnWrap = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  margin-top: 25px;
  text-align: center;
  position: fixed;
  top: 72.5%;
  @media screen and (max-width: 500px) {
    margin-left: 50px;
  }
`;
const LeadWrap2 = styled.div`
  z-index: 0;
  font-weight: 500;
  height: 500px;
  padding-left: 175px;
  padding-top: 30px;
  display: none;
  background: rgb(237, 237, 237);
  //padding-right: 50px;
  //background: #fff;
  @media screen and (max-width: 1200px) {
    display: grid;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-left: 25px;
  }
`;
const LeadHeader2 = styled.div`
  color: rgb(178, 12, 78);
  font-size: 1.8rem;
  margin-right: 50px;
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
`;
const LeadWrapper2 = styled.div`
  background: rgb(237, 237, 237);
  width: 100vw;
  height: 50vh;
`;

const WrapWrapper = styled.div``;

const LeadMagnet = () => {
  return (
    <LeadMagnet>
      <LeadWrap>
        <LeadHeader>Buy a car the right way</LeadHeader>

        <LeadP>
          In a simple checklist, we outline the essential steps involved in the
          car buying process.
        </LeadP>
        <BtnWrap>
          <a href="https://mailchi.mp/9219191fa4de/the-ultimate-car-buying-checklist">
            <ButtonMag>Download The Checklist Now</ButtonMag>
          </a>
        </BtnWrap>
      </LeadWrap>

      <LeadWrap2>
        <LeadHeader2>Buy a car the right way</LeadHeader2>
        <ImgWrap2>
          <ImgMag src={Mag} alt="checklist" />
        </ImgWrap2>
        <LeadP2>
          In a simple checklist, we outline the essential steps involved in the
          car buying process.
        </LeadP2>
        <BtnWrap2>
          <a href="https://mailchi.mp/9219191fa4de/the-ultimate-car-buying-checklist">
            <ButtonMag>Download The Checklist Now</ButtonMag>
          </a>
        </BtnWrap2>
      </LeadWrap2>
    </LeadMagnet>
  );
};

export default LeadMagnet;
