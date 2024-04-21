import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Dropdown from '../components/Navbar/Dropdown';
import MenuList from '../components/Navbar/Menu';
import Navbar from '../components/Navbar/Navbar';
import Testimonials from '../components/Testimonials';
const Container = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 115px;
  }
`;
const TestimonialsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Helmet>
        <title>
          Testimonials - Motors For You Ltd, Nottingham, Burton Joyce
        </title>
        <meta
          name="description"
          content="View our reassuring testimonials from customers like yourself now."
        />
        <link rel="canonical" href="/testimonials" />
      </Helmet>
      <Container>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <MenuList />
        <Testimonials />
        <iframe
          width="100%"
          height="400"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.772482099012!2d-1.0382800847911495!3d52.98849330915662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c65008abf7d1%3A0x4eea54182affda1e!2sMotors%20for%20You!5e0!3m2!1sen!2suk!4v1675102611604!5m2!1sen!2suk"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </Container>
    </>
  );
};

export default TestimonialsPage;
