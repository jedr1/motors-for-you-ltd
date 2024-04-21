import Img1 from '../../images/LandRover.PNG';
import ImgM from '../../images/merc-front.png';
import ImgL from '../../images/land-rover-front.png';
import ImgV from '../../images/van-front.png';
import ImgM2 from '../../images/mercs2-front.png';
import ImgMit from '../../mit/mit1.jpg';
import ImgNis from '../../nis/nis1.jpg';
import ImgPco from '../../pco/pco1.jpg';
import ImgK from '../../kia/kia1.jpg';
import ImgBMW from '../../bmw/bmw1.jpg';
import ImgWMerc from '../../wmerc/wmerc1.jpg';
import ImgGolf from '../../golf/golf1.jpg';

export const CarData = [
  {
    title: 'BMW 318',
    path: '/bmw-318',
    text: 'Sport 1.5 petrol, Automatic, Saloon, 2016 / 66 reg.',
    label: 'JUST IN',
    price: '£11,490',
    miles: '58,920 Miles',
    linkImg: ImgBMW,
    m: '58920',
    p: '11990',
  },
  {
    title: 'Volkswagen Golf',
    path: '/sold',
    text: '1.6 TDi ( Euro 6 ), SE Nav, Estate, 2017 / 67 reg',
    label: 'SOLD',
    price: '£10,500',
    miles: '46,900 Miles',
    linkImg: ImgGolf,
    m: '46900',
    p: '10500',
  },
  {
    title: 'Mercedes Benz B180 CDi',
    path: '/sold',
    text: 'Sport, 7G Automatic, MPV 5 Door, Diesel, 2012/12 reg.',
    label: 'SOLD',
    price: '£5,700',
    miles: '107,700 Miles',
    linkImg: ImgWMerc,
    m: '107700',
    p: '5700',
  },

  {
    id: 1,
    title: 'Mitsubishi Outlander',
    text: '2.0h 12kWh GX5h SUV 5dr Petrol Plug-in Hybrid',
    label: 'SOLD',
    path: '/sold',
    price: '£9,990',
    p: '9990',
    miles: '123,990 Miles',
    m: '123990',
    linkImg: ImgMit,
  },

  // {
  //   id: 1,
  //   path: '/mercedes-benz-C220-CDi',
  //   price: '£9,990',
  //   title: 'Mercedes Benz C220 CDi',
  //   text: 'AMG Sport Plus, Blue Efficiency, Automatic, 2013 / 63 reg.',
  //   label: 'JUST IN',
  //   miles: '68,430 Miles',
  //   linkImg: ImgM2,
  // },
];
