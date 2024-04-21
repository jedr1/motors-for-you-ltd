import React from 'react';
import styled from 'styled-components';
import Img1 from '../../images/5MistakesPeopleMake.jpg';
import { Button } from '../Button';
import { Button3 } from '../Button3';
import Contact from '../Contact/Contact';
import ContactLeadGen from './ContactLeadGen';
import PopUpLead from './PopUpLead';

const Container = styled.div`
  background-color: #071023;
  background: rgb(237, 237, 237);
  background-color: #fff;
  overflow: hidden;
  height: 70vh;
  //border: 5px solid black;
  width: 100vw;
  // padding-top: 20vh;
  padding-bottom: 150px;
  padding-top: 100px;
  margin-top: 100px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  @media screen and (max-width: 1200px) {
    padding-top: 100px;
  }
  @media screen and (max-height: 725px) {
    padding-top: 115px;
  }
`;
const Wrapper = styled.div`
  background: rgb(207, 207, 207);
  background: #fff;
  //border-radius: 50px;
  background: rgb(237, 237, 237);
  height: 100%;
  padding-bottom: 25px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const OnTop = styled.div`
  background: rgb(207, 207, 207);

  width: 0;
  height: 0;
  border-left: 100vw solid #fff; /* Adjust the width as needed */
  border-bottom: 50px solid rgb(237, 237, 237);
`;
const WrapperWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  margin-top: 25px;
`;
const Img = styled.img`
  height: 450px;
  position: absolute;
`;
const Div = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;
const Div2 = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 1.8rem;
  color: #081542;
  margin-bottom: 36px;
`;
const BtnWrap = styled.div``;
const Btn = styled.div`
  padding: 12px 26px;
  font-size: 16px;
  min-width: 200px;
  max-width: 280px;
  transition: 300ms ease-in-out;
  background: #081542;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #081542;
    cursor: pointer;
  }
`;

const LeadPopUp = () => {
  return (
    // <Container>
    //   <ContactLeadGen />
    //   {/* <WrapperWrap>
    //     <OnTop />
    //     <Wrapper>
    //       <ImgWrap>
    //         <Img
    //           src={Img1}
    //           alt="The 5 Mistakes People Make when Designing their Home"
    //         />
    //       </ImgWrap>
    //       <Content>
    //         <Div>TAKE CONTROL OF YOUR PROJECT:</Div>
    //         <Div2>DOWNLOAD OUR FREE PDF NOW</Div2>
    //         <BtnWrap>
    //           <Btn buttonSize="btn--large">DOWNLOAD THE PDF NOW</Btn>
    //         </BtnWrap>
    //       </Content>
    //     </Wrapper>
    //   </WrapperWrap> */}
    // </Container>
    <>
      <PopUpLead />
    </>
  );
};

export default LeadPopUp;
