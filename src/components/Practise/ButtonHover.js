import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: darkblue;
`;
const Button = styled.button`
  width: 300px;
  height: 100px;
  border: none;
  color: #fff;
  border-radius: 4px;
  transition: ease-out 0.3s;
  font-size: 2rem;
  outline: none;
  border: 3px solid #42fbf2;
  position: relative;
  z-index: 1;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
  &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #42fbf2;
  }
  &:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;

const ButtonHover = () => {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
};

export default ButtonHover;
