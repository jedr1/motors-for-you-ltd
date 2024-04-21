import React from 'react';
import { Button } from '../Button/ButtonElements';
import CardItem from './CardItem';
import './Cards2.css';
import LndRvr from '../../images/LandRover.PNG';
import CardItem2 from './CardItem2';
import styled from 'styled-components';
import Img3 from '../../SoldJag/sold-jag.jpg';
import { useEffect } from 'react';
import ImgWMerc from '../../wmerc/wmerc1.jpg';
import ImgBMW from '../../bmw/bmw1.jpg';
import ImgMit from '../../mit/mit1.jpg';
import ImgBni from '../../bni/bni1.jpg';
import ImgPco from '../../pco/pco1.jpg';
import ImgGolf from '../../golf/golf1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import ImgK from '../../kia/kia1.jpg';
import { StockData1 } from './StockData';
import Img1 from '../../images/LandRover.PNG';
import ImgC from '../../corsa/cors1.jpg';
import ImgNis from '../../nis/nis1.jpg';
import Img2 from '../../images/Ford.PNG';
import ImgM from '../merc-img/merc1.jpg';
import ImgL from '../../landrover-img/Rover3.0.jpg';
import ImgV from '../../van/van1.jpg';
import ImgS from '../../SoldRover/soldRover.jpg';
import ImgM2 from '../mercs2/mercs2/mercs1.jpg';
import ImgH from '../../hyundai/h1.jpg';
import ImgP from '../../peugeot/p1.jpg';
import ImgMini from '../../mini/m1.jpg';
import ImgF from '../../fiat/f1.jpg';
import ImgFord from '../../ford/f1.jpg';
import ImgPB from '../../pblack/b1.jpg';

const H1 = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
  color: rgb(80, 80, 80);
  font-size: 1.5rem;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
const CardsWrapper = styled.div`
  margin-top: -20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 1425px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Search = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
`;
const SearchH = styled.span`
  font-family: 'Poppins';
  padding: 10px;
`;
const SearchWrap = styled.div`
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgb(237, 237, 237);
  grid-gap: -50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    display: none;
  }
`;
const SearchWrap2 = styled.div`
  padding: 20px;

  display: grid;
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgb(237, 237, 237);
  grid-gap: -50px;
  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const Select = styled.select`
  width: 200px;
  height: 50px;
  padding-right: 25px;
  //padding-left: 25px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-gap: 300px;
  @media screen and (max-width: 800px) {
    grid-gap: 20px;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
function Cards() {
  const SearchIcon = <i class="fa-solid fa-magnifying-glass"></i>;
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const [items, setItems] = useState([
    {
      text: 'BMW 318',
      path: '/bmw-318',
      text2: 'Sport 1.5 petrol, Automatic, Saloon, 2016 / 66 reg.',
      label: 'JUST IN',
      price: '£11,490',
      miles: '58,920 Miles',
      src: ImgBMW,
      m: '58920',
      p: '11990',
    },
    {
      text: 'Volkswagen Golf',
      path: '/sold',
      text2: '1.6 TDi ( Euro 6 ), SE Nav, Estate, 2017 / 67 reg',
      label: 'SOLD',
      price: '£10,500',
      miles: '46,900 Miles',
      src: ImgGolf,
      m: '46900',
      p: '10500',
    },
    {
      text: 'Mercedes Benz B180 CDi',
      path: '/sold',
      text2: 'Sport, 7G Automatic, MPV 5 Door, Diesel, 2012/12 reg.',
      label: 'SOLD',
      price: '£5,700',
      miles: '107,700 Miles',
      src: ImgWMerc,
      m: '107700',
      p: '5700',
    },
    {
      text: 'Peugeot 207 CC',
      text2: '1.6 VTi Allure Convertible 2dr Petrol Manual Euro 5 (120 ps)',
      label: 'SOLD',
      path: '/sold',
      price: '£2,900',
      p: '2900',
      miles: '53,250 Miles',
      m: '53250',
      src: ImgPco,
    },
    {
      text: 'Nissan Qashqai',
      text2: '1.6 n-tec Hatchback 5dr Petrol Manual 2WD (159 g/km, 113 bhp)',
      label: 'SOLD',
      path: '/sold',
      price: '£2,890',
      p: '2890',
      miles: '113,350 Miles',
      m: '113350',
      src: ImgBni,
    },
    {
      text: 'Mitsubishi Outlander',
      text2: '2.0h 12kWh GX5h SUV 5dr Petrol Plug-in Hybrid CVT 4WD Euro 6',
      label: 'SOLD',
      path: '/sold',
      price: '£9,990',
      p: '9990',
      miles: '123,990 Miles',
      m: '123990',
      src: ImgMit,
    },
    {
      text: 'Nissan Pathfinder',
      text2: '2.5 dCi, Tekna, SUV, 5 Door, Diesel, Automatic, 2014 / 14 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£10,990',
      p: '10990',
      miles: '94,600 Miles',
      m: '94600',
      src: ImgNis,
    },
    {
      text: 'Mercedes Benz E220 CDi',
      text2: 'AMG LINE, Cabriolet, Automatic, 2018 / 18 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£25,990',
      p: '25990',
      miles: '35,180 Miles',
      m: '35180',
      src: ImgM,
    },

    {
      text: 'Land Rover Range Rover',
      text2: '3.0 TDV6, Vogue, 4×4 , Estate, Automatic, 2104 / 64 Reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£22,900',
      p: '22900',
      miles: '114,990 Miles',
      src: ImgL,
      m: '114990',
    },
    {
      text: 'Ford Transit Connect',
      text2:
        '200 Limited, 1.5 TDCi, L1 H1, Panel van, 6 speed manual, 2017 / 67 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£8,750 +VAT',
      p: '10990',
      miles: '85,700 Miles',
      src: ImgV,
      m: '85700',
    },

    {
      text: 'Land Rover Discovery Sport',
      text2: '2.0 TD4, LANDMARK, AUTOMATIC, SUV, 5 DOOR, 2019 / 68 REG',
      label: 'SOLD',
      path: '/sold',
      price: '£27,500',
      p: '27500',
      miles: '38,590 Miles',
      src: ImgS,
      m: '38590',
    },

    {
      text: 'Mercedes Benz C220 CDi',
      text2: 'AMG Sport Plus, Blue Efficiency, Automatic, 2013 / 63 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£9,990',
      p: '9990',
      miles: '68,430 Miles',
      m: '68430',
      src: ImgM2,
    },
    {
      text: 'Hyundai i30',
      text2:
        '1.4 Blue Drive, SE, 5 Door Hatchback, 6 speed manual, 2015 / 65 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£7,990',
      p: '7990',
      miles: '48,140 Miles',
      m: '48140',
      src: ImgH,
    },
    {
      text: 'Ford Ranger Wildtrak',
      text2: 'Pick Up, 3.2 Diesel, Double cab, 4×4 Automatic, 2018 / 68 reg',
      label: 'SOLD',
      path: '/sold',
      price: '£24,500 +VAT',
      p: '24500',
      miles: '95,600 Miles',
      m: '95600',
      src: Img2,
    },
    {
      text: 'Peugeot 208',
      text2:
        '1.2 Pure Tech, Allure, 5 Door Hatchback, 5 speed manual, 2017 / 67 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£7,490',
      m: '61750',
      p: '7490',
      miles: '61,750 Miles',
      src: ImgP,
    },
    {
      text: 'Mini Countryman',
      text2: '2.0 SD, Cooper, 5 Door Hatchback, 6 speed manual, 2013 / 13 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£6,750',
      miles: '77,300 Miles',
      m: '77300',
      src: ImgMini,
      p: '6750',
    },
    {
      text: 'Fiat 500',
      text2: '1.2 ( Stop / Start ), Pop, 3 Door Hatch, Manual, 2015 / 15 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£5,990',
      miles: '25,550 Miles',
      m: '25550',
      src: ImgF,
      p: '5990',
    },
    {
      text: 'Jaguar XF',
      text2: '2.2D, Portfolio, Saloon, Automatic, 2015 / 15 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£11,990',
      p: '11990',
      miles: '61,140 Miles',
      m: '61140',
      src: Img3,
    },
    {
      text: 'Ford KA',
      text2: '1.2 Edge, 3 Door Hatchback, 5 speed manual, 2011 / 11 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£3,900',
      miles: '49,440 Miles',
      src: ImgFord,
      p: '3900',
      m: '49440',
    },
    {
      text: 'Peugeot 207',
      text2: '1.6 HDI, Sport, 5 Door, 5 speed manual, 2009 / 59 reg.',
      label: 'SOLD',
      path: '/sold',
      price: '£2,850',
      miles: '92,300 Miles',
      src: ImgPB,
      m: '92300',
      p: '2850',
    },
    {
      text: 'Vauxhall Corsa',
      path: '/sold',
      text2: '1.3 CDTi, ecoFLEX, Manual, 5 Door hatchback, 2015 / 15 reg.',
      label: 'SOLD',
      price: '£5,300',
      miles: '78,820 Miles',
      src: ImgC,
      m: '78820',
      p: '5300',
    },

    // Add more items here
  ]);

  const [sortOrder, setSortOrder] = useState('');

  // Function to handle sorting
  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortItems(selectedOrder);
  };

  // Function to sort the items
  const sortItems = (order) => {
    const sortedItems = [...items];

    if (order === 'highToLow') {
      sortedItems.sort((a, b) => b.p - a.p);
    } else if (order === 'lowToHigh') {
      sortedItems.sort((a, b) => a.p - b.p);
    }
    if (order === 'MilesHighToLow') {
      sortedItems.sort((a, b) => b.m - a.m);
    } else if (order === 'MilesLowToHigh') {
      sortedItems.sort((a, b) => a.m - b.m);
    }
    setItems(sortedItems);
  };
  // const products = [

  //   // Add more products here
  // ];

  // // const [sortOption, setSortOption] = useState('price-asc');
  // // const handleSortChange = (event) => {
  // //   setSortOption(event.target.value);
  // //   // You can add sorting logic here based on the selected option
  // // };
  // // const sortedProducts = [...products]; // Copy your products array

  // // if (sortOption === 'price-asc') {
  // //   sortedProducts.sort((a, b) => a.p - b.p);
  // // } else if (sortOption === 'price-desc') {
  // //   sortedProducts.sort((a, b) => b.p - a.p);
  // // }

  // // // Render your sortedProducts in the <ul>
  // // const [productss, setProductss] = useState([
  // //   { id: 1, name: 'Product A', price: 50 },
  // //   { id: 2, name: 'Product B', price: 30 },
  // //   { id: 3, name: 'Product C', price: 70 },
  // //   // Add more products here
  // // ]);
  // // const handleSortChanges = () => {
  // //   let sortedProductss;

  // //   if (sortOptions === 'price-high-to-low') {
  // //     sortedProductss = [...products].sort((a, b) => b.price - a.price);
  // //   } else if (sortOptions === 'price-low-to-high') {
  // //     sortedProductss = [...products].sort((a, b) => a.price - b.price);
  // //   } else {
  // //     // Handle other sorting options if needed
  // //   }

  // //   setProductss(sortedProductss);
  // // };

  // // const [sortOptions, setSortOptions] = useState('price-high-to-low');
  // // const [items, setItems] = useState([
  // //   { id: 1, name: 'Item A', price: 50 },
  // //   { id: 2, name: 'Item B', price: 30 },
  // //   { id: 3, name: 'Item C', price: 70 },
  // //   // Add more items here
  // // ]);

  // const [sortOrder, setSortOrder] = useState('');

  // // Function to handle sorting
  // const handleSortChange = (event) => {
  //   const selectedOrder = event.target.value;
  //   setSortOrder(selectedOrder);
  //   sortItems(selectedOrder);
  // };

  // // Function to sort the items
  // const sortItems = (order) => {
  //   const sortedItems = [...items];

  //   if (order === 'highToLow') {
  //     sortedItems.sort((a, b) => b.price - a.price);
  //   } else if (order === 'lowToHigh') {
  //     sortedItems.sort((a, b) => a.price - b.price);
  //   }

  //   setItems(sortedItems);
  // };
  return (
    <div className="cards" data-aos="fade-up">
      <SearchWrap>
        <Search>
          <SearchH>Search our cars:</SearchH>
          <div>
            <input
              className="search-engine"
              type="text"
              placeholder="Search.."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </Search>

        <H1>Latest Stock</H1>
        <div className="select-container">
          <select
            className="select-box"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="" disabled hidden>
              Sort
            </option>
            <option className="option1" value="highToLow">
              Price (High to Low)
            </option>

            <option value="lowToHigh">Price (Low to High)</option>
            <option value="MilesLowToHigh">Mileage (Low to High)</option>
          </select>
        </div>
        {/* <button onClick={sortByPriceHighToLow}>Price (High to Low)</button> */}
      </SearchWrap>
      <SearchWrap2>
        <H1>Latest Stock</H1>
        <Grid>
          <Search>
            <SearchH>Search our cars:</SearchH>
            <div>
              <input
                className="search-engine"
                type="text"
                placeholder="Search.."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </Search>

          <div className="select-container">
            <select
              className="select-box"
              onChange={handleSortChange}
              value={sortOrder}
            >
              <option value="" disabled hidden>
                Sort
              </option>
              <option className="option1" value="highToLow">
                Price (High to Low)
              </option>

              <option value="lowToHigh">Price (Low to High)</option>
              <option value="MilesLowToHigh">Mileage (Low to High)</option>
            </select>
          </div>
        </Grid>
        {/* <button onClick={sortByPriceHighToLow}>Price (High to Low)</button> */}
      </SearchWrap2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <CardsWrapper>
            {items
              .filter((val) => {
                if (searchTerm == '') {
                  return val;
                } else if (
                  val.text.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
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
          </CardsWrapper>
        </div>
      </div>
    </div>
  );
}

export default Cards;
