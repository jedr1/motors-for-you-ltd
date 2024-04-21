import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Locate from '../components/Locate-a-car/Locate';
import Dropdown from '../components/Navbar/Dropdown';
import MenuList from '../components/Navbar/Menu';
import Navbar from '../components/Navbar/Navbar';

const Container = styled.div`
  background: #fff;
  position: relative;
  z-index: 50;
`;

const LocatePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Helmet>
        <title>
          Locate-A-Car - Motors For You Ltd, Nottingham, Burton Joyce
        </title>
        <meta
          name="description"
          content="Sometimes people can't find the car they are looking for. Please take the time to fill in the enclosed form and one of our team will call you to discuss your ideal car further. Your dream car could be just a few clicks away !"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Container>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <MenuList />
        <Locate />
      </Container>
    </>
  );
};

export default LocatePage;
