import React from 'react';
import styled from 'styled-components';
import BenefitCard from './BenefitCard';

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

const Benefits = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          Here are just some Additional Benefits you will enjoy when dealing
          with Motors For You Ltd:
        </Header>
        <BenefitCard></BenefitCard>
      </Wrapper>
    </Container>
  );
};

export default Benefits;
