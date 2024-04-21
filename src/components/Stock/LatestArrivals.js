import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import LndRvr from '../../images/LandRover.PNG';
import CardItem2 from './CardItem2';

const Container = styled.div`
  width: 100%;
  background: rgb(237, 237, 237);
  padding: 75px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div``;
const Header = styled.div`
  padding-bottom: 32px;
  margin-top: -24px;
  font-size: 1.8rem;
  font-weight: 300;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const LatestArrivals = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Latest Arrivals</Header>
        <CardWrapper>
          <CardItem2
            src={LndRvr}
            text="Land Rover Discovery Sport"
            text2="2.0 TD4, LANDMARK, AUTOMATIC, SUV, 5 DOOR, 2019 / 68 REG"
            label="JUST IN"
            path="/details"
            price="£27,500"
            miles="38,590 Miles"
          />
          <CardItem2
            src={LndRvr}
            text="Land Rover Discovery Sport"
            text2="2.0 TD4, LANDMARK, AUTOMATIC, SUV, 5 DOOR, 2019 / 68 REG"
            label="JUST IN"
            path="/details"
            price="£27,500"
            miles="38,590 Miles"
          />
          <CardItem2
            src={LndRvr}
            text="Land Rover Discovery Sport"
            text2="2.0 TD4, LANDMARK, AUTOMATIC, SUV, 5 DOOR, 2019 / 68 REG"
            label="JUST IN"
            path="/details"
            price="£27,500"
            miles="38,590 Miles"
          />
          <CardItem2
            src={LndRvr}
            text="Land Rover Discovery Sport"
            text2="2.0 TD4, LANDMARK, AUTOMATIC, SUV, 5 DOOR, 2019 / 68 REG"
            label="JUST IN"
            path="/details"
            price="£27,500"
            miles="38,590 Miles"
          />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default LatestArrivals;
