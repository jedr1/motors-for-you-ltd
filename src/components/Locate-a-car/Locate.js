import React from 'react';
import styled from 'styled-components';
import BlogLeadGen from '../LeadGen/BlogLeadGen';
import BlogLeadGen2 from '../LeadGen/BlogLeadGen2';
import ContactLeadGen from '../LeadGen/ContactLeadGen';
import Contact2 from './Contact';

const Container = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 115px;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.h1`
  margin: 50px;
  margin-bottom: 0px;
  //border-bottom: 1px solid rgb(178, 12, 78);
  max-width: 550px;
  //font-weight: 600;
  padding-bottom: 15px;
`;
const Sub = styled.div`
  color: #333;
  color: #4e4e50;
  margin-top: 25px;
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
const Span = styled.span`
  font-weight: 600;
`;
const Div = styled.h1`
  width: 200px;
  border-bottom: 1px solid rgb(178, 12, 78);
  text-align: center;
  color: #fff;
`;

const Wrap = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1400px) {
    width: 100%;
    grid-gap: 100px;
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    //grid-gap: 250px;
    grid-template-columns: 1fr;
  }
`;
const ContactWrapper = styled.div`
  //margin-top: -75px;
  margin-left: 100px;

  @media screen and (max-width: 1300px) {
    margin-left: 0px;
  }
  /* @media screen and (max-width: 600px) {
    margin-top: -85px;
  }
  @media screen and (max-width: 380px) {
    margin-top: -65px;
  } */
`;
const LeadGenWrap = styled.div`
  max-width: 600px;
  position: absolute;
  right: 0;
  background: rgb(237, 237, 237);
  height: 500px;
  margin-top: 75px;
  padding-top: 25px;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
const Locate = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          Welcome to our free <Span>"Locate-A-Car"</Span> Service !
        </Header>
        <Div></Div>
        <Sub>
          Sometimes people can't find the car they are looking for. Please take
          the time to fill in the enclosed form and one of our team will call
          you to discuss your ideal car further. Your dream car could be just a
          few clicks away !
        </Sub>
        <Wrap>
          <ContactWrapper>
            <Contact2 />
          </ContactWrapper>
          <LeadGenWrap>
            <BlogLeadGen2 />
          </LeadGenWrap>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Locate;
