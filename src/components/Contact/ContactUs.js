import React from 'react';
import styled from 'styled-components';
import './Contact.css';

const Container = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 175px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 200px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 75px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 50px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 10px;
  }
`;
const CallUs = styled.div`
  font-size: 1.8rem;
  padding-bottom: 20px;
`;
const Social = styled.div`
  font-size: 1.8rem;
`;
const Text = styled.div`
  font-size: 1.8rem;
`;
const Phone = styled.div``;
const Media = styled.div`
  display: flex;
  justify-content: center;
`;
const Media1 = styled.div``;
const WhatsApp = styled.div`
  display: flex;
  justify-content: center;
`;
const Number = styled.div`
  background: rgba(0, 0, 0, 0.2);
  text-decoration: none;
  outline: none;
  border: 1px solid rgb(178, 12, 78);
  cursor: pointer;
  display: flex;
  min-width: 225px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  padding: 15px;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    border: 1px solid rgb(178, 12, 78);
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 5%;
  }
`;
const Icons = styled.div`
  max-width: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 600px) {
    margin-bottom: 5%;
  }
`;
const WIcon = styled.div`
  background: rgb(37 211 102);
  text-decoration: none;

  color: white;
  padding: 15px;
  margin-top: 15px;
  max-width: 225px;
  border-radius: 5%;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const WhatsApp1 = styled.div`
  z-index: 1;
`;
const WhatP = styled.span`
  font-size: 1.2rem;
  font-family: 'Poppins';
  text-decoration: none;
`;
const F = styled.span`
  color: #fff;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const In = styled.span`
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Tw = styled.span`
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Yo = styled.span`
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const NumWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;
const Email = styled.div`
  @media screen and (max-width: 1200px) {
    position: absolute;
    //margin-bottom: 75px;
    left: 50%;
    transform: translateX(-50%);
    /* width: 100%;
    display: flex;
    justify-content: center;

    flex-direction: column; */
  }
  @media screen and (max-width: 768px) {
    //position: static;
    margin-top: 25px;
  }
`;
const A = styled.div`
  margin-top: 15px;
  //height: 100%;
  //color: blue;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  @media screen and (max-width: 1300px) {
    margin-left: 10px;
  }
`;
const SpanI = styled.div`
  font-size: 2.5rem;
  color: rgb(178, 12, 78);
  margin-right: 17.5px;

  // margin-top: -17.5px;
  @media screen and (max-width: 1300px) {
    margin-right: 10px;
  }
`;
const Span = styled.div`
  color: rgb(10, 50, 152);
  transition: ease 300ms;
  &:hover {
    color: orangered;
  }
  //margin-top: -10px;
`;
const EDiv = styled.div`
  /* @media screen and (max-width: 1200px) {
    width: 100vw;
  } */
`;
const WrapWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
`;
const Wrap = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 4fr; */
`;

const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Phone>
          <CallUs>Call us:</CallUs>
          <WrapWrap>
            <Wrap>
              <Div>Mobile:</Div>
              <a href="tel: 07947 916 916">
                <NumWrap>
                  <Number>
                    <i class="underline fa-solid fa-phone"></i>
                    <span className="num underline"> 07947 916 916</span>
                  </Number>
                </NumWrap>
              </a>
            </Wrap>
          </WrapWrap>
          <WrapWrap>
            <Wrap>
              <Div>Office:</Div>
              <a href="tel: 0115 9313 131">
                <NumWrap>
                  <Number>
                    <i class="underline fa-solid fa-phone"></i>
                    <span className="num underline"> 0115 9313 131</span>
                  </Number>
                </NumWrap>
              </a>
            </Wrap>
          </WrapWrap>
        </Phone>
        <Media1>
          <Social>Social media:</Social>
          <Media>
            <Icons>
              <F>
                <a
                  href="https://www.facebook.com/MotorsForYouLtd/"
                  className="fa fa-facebook"
                ></a>
              </F>
              <In>
                <a
                  href="https://www.instagram.com/ltdmotorsforyou/"
                  class="fa fa-instagram"
                ></a>
              </In>
              <Tw>
                <a
                  href="https://twitter.com/motorsforyoultd"
                  class="fa fa-twitter"
                ></a>
              </Tw>
              <Yo>
                <a
                  href="https://www.youtube.com/watch?v=VPO8q9Wh_Wg"
                  class="fa fa-youtube"
                ></a>
              </Yo>
            </Icons>
          </Media>
        </Media1>
        <WhatsApp1>
          <Text>Text us:</Text>
          <WhatsApp>
            <WIcon>
              <a
                href="https://wa.me/+447947916916/"
                alt="Whatsapp Link"
                className="fa fa-whatsapp"
              >
                <WhatP> WhatsApp Us</WhatP>
              </a>
            </WIcon>
          </WhatsApp>
        </WhatsApp1>
        <EDiv>
          <Email>
            <Text>Send us an email:</Text>

            <A>
              <SpanI>
                <i class="fa-regular fa-envelope-open"></i>
              </SpanI>
              <Span>
                <a href="mailto:sales@motorsforyou.net">
                  sales@motorsforyou.net
                </a>
              </Span>
            </A>
          </Email>
        </EDiv>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
