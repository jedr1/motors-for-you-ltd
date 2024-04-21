import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonEl = styled.div`
  /* border-radius: 50px;
  background: ${({ primary }) => (primary ? 'rgb(178, 12, 78)' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;*/
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  //width: 200px;
  border: none;
  color: #fff;
  border-radius: 50px;
  transition: ease-out 0.3s;
  font-size: 1rem;
  outline: none;

  position: relative;
  z-index: 1;
  background: rgb(178, 12, 78);

  /*&:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : 'rgb(220, 0, 0)')};
  }*/
  &:hover {
    color: #000;
    cursor: pointer;
    box-shadow: 5px -5px 15px 0 rgba(178, 12, 78, 0.5),
      -5px 5px 15px 0 rgba(178, 12, 78, 0.5);
  }
  &:before {
    transition: 0.5s all ease;
    position: absolute;
    border-radius: 50px;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #fff;
  }
  &:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;
