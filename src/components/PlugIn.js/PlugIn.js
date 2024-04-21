import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 20vh;
  background: #000;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  color: #fff;
  font-size: 1.2rem;
`;

const PlugIn = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Powered by Market Effective</Header>
      </Wrapper>
    </Container>
  );
};

export default PlugIn;
