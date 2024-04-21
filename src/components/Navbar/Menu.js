import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavLink = css`
  color: #000;
  display: flex;
  //padding: 0 1rem;

  //height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(237, 237, 237);
  margin-top: 0px;
  //padding-right: 350px;
  //padding-left: 300px;
  width: 100%;
  z-index: 999;
  position: relative;
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
const MenuLink = styled(Link)`
  ${NavLink};
  // margin-right: 50px;
  color: rgb(82, 82, 82);
  padding-left: 10px;
  /* padding-right: 50px; */
  width: 175px;
  //padding-left: 10px;
  //padding-right: 10px;
  //padding: 100px;
  transition: 0.5s ease;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  border-left: 2px solid rgb(0, 0, 0, 0.1);
  color: #4e4e50;
  font-weight: 500;
  &:hover {
    color: rgb(178, 12, 78);

    //font-weight: 500;
  }
  @media screen and (max-width: 1250px) {
    width: 150px;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
    margin: 5px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const MenuList = () => {
  return (
    <Menu>
      <Wrapper>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/latest-stock">Latest Stock</MenuLink>
        <MenuLink to="/locate-a-car">Locate-A-Car</MenuLink>
        <MenuLink to="/testimonials">Testimonials</MenuLink>
        <MenuLink to="/benefits">Benefits</MenuLink>
        <MenuLink to="/blog">Blog</MenuLink>
        <MenuLink to="/contact">Contact Us</MenuLink>
      </Wrapper>
    </Menu>
  );
};

export default MenuList;
