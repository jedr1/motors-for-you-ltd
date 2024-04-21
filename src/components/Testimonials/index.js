import React from 'react';
import styled from 'styled-components';
import TestimonCard from './TestimonCard';

const Container = styled.div``;
const Wrapper = styled.div``;
const Header = styled.h1`
  padding-top: 75px;
  text-align: center;
  color: #000;
  padding-bottom: 50px;
  font-family: 'Poppins';

  font-weight: 400;
`;

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          Here are just a few testimonials we would like to share with you from
          our loyal customers:
        </Header>
        <TestimonCard />
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
