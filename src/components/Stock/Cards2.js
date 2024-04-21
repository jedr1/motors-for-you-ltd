import React from 'react';
import { Button } from '../Button/ButtonElements';
import CardItem from './CardItem';
import './Cards2.css';
import Img1 from '../../images/LandRover.PNG';
import CardItem2 from './CardItem2';
import styled from 'styled-components';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StockData, { StockData1 } from './StockData';
import { useState } from 'react';
import { isValidElement } from 'react';

const H1 = styled.h1`
  font-family: 'Poppins';
  font-weight: 300;
`;

function Cards2() {
  const SearchIcon = <i class="fa-solid fa-magnifying-glass"></i>;
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder={SearchIcon}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {StockData1.filter((val) => {
        if (searchTerm == '') {
          return val;
        } else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <CardItem2
            text={val.text}
            src={val.src}
            label={val.label}
            path={val.path}
            text2={val.text2}
            price={val.price}
            miles={val.miles}
          />
        );
      })}
    </div>
  );
}

export default Cards2;
