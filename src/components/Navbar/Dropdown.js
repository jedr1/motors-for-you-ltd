import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button/ButtonElements';
import { menuData } from '../../data/MenuData';

const DropdownContainer = styled.div`
  margin-top: 235px;
  position: fixed;
  z-index: 40;
  width: 100vw;
  //height: 55vh;
  background: rgb(237, 237, 237);
  background: #fff;
  //background: rgba(180, 134, 152, 0.9);
  //background: #000;
  display: grid;
  //align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  @media screen and (max-width: 500px) {
    //height: 55vh;
  }
  @media screen and (max-width: 380px) {
    // height: 60vh;
  }
  @media screen and (max-width: 768px) {
    margin-top: 195px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 110px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: rgb(178, 12, 78);
`;

const DropdownWrapper = styled.div`
  //display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: left;
  margin-bottom: 2rem;
  //display: flex;
  //position: relative;
  // left: 35vw;
  //left: 50%;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (max-width: 380px) {
    grid-template-rows: repeat(6, 60px);
    margin-bottom: 2rem;
  }
`;

const DropdownLink = styled(Link)`
  ///background-color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  color: #000;
  margin-left: 10px;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100vw;
  align-self: center;
  //padding-bottom: 10px;
  //text-align: center;
  transition: 0.2s ease-in-out;

  &:hover {
    color: rgb(178, 12, 78);
  }
  @media screen and (max-width: 600px) {
    //margin-right: 50px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  color: #000;
  margin-bottom: 25px;
  @media screen and (max-width: 600px) {
    //margin-right: 50px;
  }
`;
const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: rgb(178, 12, 78);
  white-space: nowrap;
  padding: 10px 22px;
  margin-left: -20%;
  margin-top: 35px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transform: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <DropdownWrapper>
        <Wrap>
          <DropdownMenu>
            {menuData.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
        </Wrap>
        <BtnWrap>
          <Link to="/contact">
            <Button primary="true" dark="true" to="/contact">
              Contact us
            </Button>
          </Link>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
