import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
  margin-top: 10px;
`;
const Div = styled.div`
  font-weight: 300;
`;
const Span = styled.span`
  text-decoration: underline;
  transition: ease 0.5s;
  font-weight: 400;

  &:hover {
    color: #a61111;
    cursor: pointer;
  }
`;

const Proof = () => {
  return (
    <Container>
      <Div>
        Website created by{' '}
        <a href="https://www.marketeffective.net">
          <Span>Market Effective</Span>
        </a>
      </Div>
    </Container>
  );
};

export default Proof;
