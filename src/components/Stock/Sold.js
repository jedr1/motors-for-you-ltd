import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/ButtonElements';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
const Content = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 50px;
`;

const Sold = () => {
  return (
    <Container>
      <Wrapper>
        <Content>Sorry, this car has been sold</Content>
        <Button to="/latest-stock">Back to latest stock</Button>
      </Wrapper>
    </Container>
  );
};

export default Sold;
