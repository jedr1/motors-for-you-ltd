import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/ButtonElements';
import { Button2 } from '../Button/ButtonElements copy 2';

const Container = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`;
const Header = styled.div`
  padding: 15px;
  color: #4e4e50;
  text-align: center;
`;
const Stars = styled.div`
  display: flex;
  color: rgb(178, 12, 78);
  padding: 25px;
  padding-left: 0px;
  padding-right: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
`;
const Line = styled.div`
  width: 100px;
  border-bottom: 1px solid rgb(178, 12, 78);
`;
const BtnWrap = styled.div`
  width: 200px;
  margin-bottom: 25px;
`;
const Trust = () => {
  return (
    <Container>
      <Wrapper>
        <Stars>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </Stars>
        <Line />
        <Header>
          With over 30 years of car sales experience, we've collected hundreds
          of positive reviews.
        </Header>
        <BtnWrap>
          <a href="https://uk.trustpilot.com/review/motorsforyou.net">
            <Button2>See our reviews</Button2>
          </a>
        </BtnWrap>
      </Wrapper>
    </Container>
  );
};

export default Trust;
