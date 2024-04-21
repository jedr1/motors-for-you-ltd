import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import ImgLogo from '../../images/logo.jpg';
import { FaBars } from 'react-icons/fa';
import './socials.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../Button/ButtonElements';
import { ButtonEl } from '../Button/ButtonElements copy';
import MenuIcon from './MenuIcon';

const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: relative;
  width: 100%;
  margin-bottom: 100px;

  // border-bottom: 4px solid black;
`;

const NavLink = css`
  color: #000;
  display: flex;
  padding: 0 1rem;

  //height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: rgb(178, 12, 78);
  font-style: italic;
  font-size: 200px;
  text-align: center;
  margin-top: -5px;
  font-weight: 500;
  align-self: center;

  @media screen and (max-width: 500px) {
  }
`;

const MenuBars = styled(FaBars)`
  display: none;
  color: rgb(178, 12, 78);

  @media screen and (max-width: 1100px) {
    display: block;
    color: rgb(178, 12, 78);
    height: 30px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 6px;
    left: 40px;
    transform: translate(-50%, 25%);
  }
`;
const BtnWrap = styled.div`
  position: absolute;
  right: 0;
  margin-right: 12px;
  top: 8px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    display: none;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: -48px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  cursor: pointer;
  // margin-right: 50px;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.2rem;

  &:hover {
    background: rgb(178, 12, 78);
  }
`;

const Img = styled.img`
  //min-width: 100px;
  max-width: 100%;
  height: 200px;
  //margin-left: 17.5%;
  object-fit: cover;
  margin-top: 25px;
  z-index: 10;
  @media screen and (max-width: 1100px) {
    height: 150px;
  }
  @media screen and (max-width: 768px) {
    /*height: 225px;*/
    height: 115px;
    margin-left: -10px;
    // margin: 50px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0px;
    margin-top: 10px;
    height: 90px;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: rgb(178, 12, 78);
  white-space: nowrap;
  padding: 10px 22px;
  margin-left: -20%;
  margin-top: 15px;
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
const NavContainer = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 41;
  background-color: #fff;
  position: relative;
  @media screen and (max-width: 1100px) {
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
  }
  @media screen and (max-width: 600px) {
    height: 115px;
    position: fixed;
    top: 0;
  }
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  z-index: 10;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;
const Menu = styled.div`
  display: grid;
  background: rgb(220, 220, 220);
  margin-top: 0px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MenuLink = styled(Link)`
  ${NavLink};
  // margin-right: 50px;
  color: rgb(82, 82, 82);
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  border-left: 1px solid #000;

  &:hover {
    background: rgb(178, 12, 78);
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
    margin: 5px;
  }
`;
const Callus = styled.div`
  padding-left: 85%;
  margin-top: -20%;
  font-size: 1rem;
  color: rgb(82, 82, 82);
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const Office = styled.div``;
const Mobile = styled.div``;
const LightText = styled.span`
  font-weight: 300;
`;
const HeavyText = styled.span`
  font-weight: 500;
  margin-left: 10px;
`;
const Icon = styled.span`
  &:hover {
    transform: scale(1.05);
  }
`;
const CallUs = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  width: 80px;
  margin-top: 5px;
`;
const Social = styled.div`
  font-size: 1.8rem;
`;
const Text = styled.div`
  font-size: 1.8rem;
`;
const PhoneWrap = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
`;
const Phone = styled.div`
  /* margin-top: -31%;
  margin-left: 110%; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 50px;
  margin-top: 25px;
  margin-left: 225px;
  @media screen and (max-width: 1250px) {
    //margin-left: 100%;
    margin-left: 100px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Media = styled.div``;
const WhatsApp = styled.div``;
const Number = styled.div`
  background: rgba(0, 0, 0, 0.2);
  text-decoration: none;
  outline: none;
  border: 1px solid rgb(178, 12, 78);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-left: 0%;
  margin-right: -90%;
  padding: 10px;
  font-size: 1.2rem;
  max-height: 45px;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    border: 1px solid rgb(178, 12, 78);
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 5%;
  }
`;
const WIcon = styled.div`
  background: rgb(37 211 102);
  color: white;
  padding: 15px;
  margin-top: -5px;
  height: 60px;
  min-width: 200px;
  border-radius: 5%;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const WhatsApp1 = styled.div``;
const WhatP = styled.span`
  font-size: 1.2rem;
  font-family: 'Poppins';
`;
const MenuIconWrap = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 25px;
  margin-left: 25px;
  @media screen and (max-width: 1100px) {
    display: inherit;
  }
  @media screen and (max-width: 600px) {
    margin-top: 35px;
  }
`;
const FoneWrap = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: inherit;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 35px;
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;
const Fone = styled.i``;
const Navbar = ({ toggle }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <NavContainer>
      <Wrap>
        <div className="social-icons1">
          <Icon>
            <div
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a
                href="https://www.instagram.com/ltdmotorsforyou/"
                alt="instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Icon>
          <Icon>
            <div>
              <a href="https://twitter.com/motorsforyoultd" alt="twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </Icon>
          <Icon>
            <div>
              <a
                href="https://www.facebook.com/MotorsForYouLtd/"
                alt="instagram"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </Icon>
        </div>
        <Link to="/">
          <Img src={ImgLogo} alt="logo" />
        </Link>

        <MenuIconWrap onClick={toggle}>
          <MenuIcon onClick={toggle} />
        </MenuIconWrap>

        <BtnWrap>
          <ButtonEl to="/contact">Contact Us</ButtonEl>
        </BtnWrap>
        <PhoneWrap>
          <Phone>
            <CallUs>Text Us:</CallUs>

            <WIcon>
              <a
                href="https://wa.me/+447947916916/"
                alt="Whatsapp Link"
                className="fa fa-whatsapp"
              >
                <WhatP> WhatsApp Us</WhatP>
              </a>
            </WIcon>
          </Phone>
        </PhoneWrap>
        <Link to="/contact">
          <FoneWrap>
            <Fone className="fa-solid fa-phone"></Fone>
          </FoneWrap>
        </Link>
      </Wrap>
    </NavContainer>
  );
};

export default Navbar;
