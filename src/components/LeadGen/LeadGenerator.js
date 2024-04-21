import React from 'react';
import styled from 'styled-components';
import Img1 from '../../images/LeadGen.png';

const Container = styled.div`
  background-color: #071023;
  background: rgb(237, 237, 237);
  background-color: #fff;
  height: 100%;
  width: 100vw;
  // padding-top: 20vh;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
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
  background: rgb(237, 237, 237);
  height: 100%;
  padding-bottom: 25px;
  width: 100vw;
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
  width: 600px;
`;
const Div2 = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 1.8rem;
  color: #081542;
  color: rgb(178, 12, 78);
  margin-bottom: 36px;
`;
const BtnWrap = styled.div``;
const Btn = styled.div`
  padding: 12px 26px;
  font-size: 16px;
  min-width: 200px;
  max-width: 325px;
  transition: 300ms ease-in-out;
  background: #081542;
  background: rgb(178, 12, 78);
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

const LeadGenerator = () => {
  return (
    <Container>
      <WrapperWrap>
        <OnTop />
        <Wrapper>
          <ImgWrap>
            <Img
              src={Img1}
              alt="The 5 Mistakes People Make when Designing their Home"
            />
          </ImgWrap>
          <Content>
            <Div>DISCOVER THE JOY OF HASSLE-FREE CAR SHOPPING:</Div>
            <Div2>DOWNLOAD OUR FREE CHECKLIST NOW</Div2>
            <a href="https://mailchi.mp/2c27f972723c/the-ultimate-car-buying-checklist">
              <BtnWrap>
                <Btn buttonSize="btn--large">DOWNLOAD THE CHECKLIST NOW</Btn>
              </BtnWrap>
            </a>
          </Content>
        </Wrapper>
      </WrapperWrap>
    </Container>
  );
};

export default LeadGenerator;
