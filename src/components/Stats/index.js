import React from 'react';
import styled from 'styled-components';
import './Stats.css';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: -250px;
  padding-right: 50px;
  padding-left: 50px;
  width: 100%;

  @media screen and (max-width: 900px) {
    padding-right: 0;
    padding-left: 0;
    margin-top: 0;
  }
`;
const StatsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #fff;
  padding: 20%;
  text-align: center;
`;
const Stat = styled.h4`
  font-size: 3.5rem;
  // margin-left: 65%;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-left: -25%;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;
const Title = styled.p`
  text-align: left;
  font-size: 1.2rem;

  margin-left: -2%;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    margin-left: -10%;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Stats = () => {
  return (
    <Container>
      <StatsWrap>
        <Stat>3+</Stat>
        <Title className="stats-title">decades of car sales experience</Title>
      </StatsWrap>
      <StatsWrap>
        <Stat>1000+</Stat>
        <Title className="stats-title title">cars sold</Title>
      </StatsWrap>
      <StatsWrap>
        <Stat>100%</Stat>
        <Title className="stats-title title">5 star reviews</Title>
      </StatsWrap>
    </Container>
  );
};

export default Stats;
