import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import FrontPage from '../components/Blogs/FrontPage';
import Dropdown from '../components/Navbar/Dropdown';
import MenuList from '../components/Navbar/Menu';
import Navbar from '../components/Navbar/Navbar';

const En = styled.div`
  //overflow-x: hidden;
  @media screen and (max-width: 600px) {
    margin-top: 115px;
  }
`;

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <En>
      <Helmet>
        <title>
          The Motors For You Blog - Motors For You Ltd, Nottingham, Burton Joyce
        </title>
        <meta
          name="description"
          content="Buying a car can be a taunting task. Use this blog to answer any questions you may have so you can go to buy your next car with the confidence you'll find the perfect car for you.
"
        />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <MenuList />
      <FrontPage />
    </En>
  );
};

export default BlogPage;
