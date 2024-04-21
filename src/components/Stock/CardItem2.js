import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/ButtonElements';
import './Cards2.css';
function CardItem2(props) {
  return (
    <>
      <li className="cards__item1">
        <Link className="cards__item__link" to={props.path}>
          <figure
            className="cards__item__pic-wrap1"
            data-category={props.label}
          >
            <img src={props.src} alt="" className="cards__item__img1" />
          </figure>

          <div className="cards__item__info">
            <h1 className="cards__item__price1">{props.price}</h1>

            <h6 className="cards__item__text1">{props.text}</h6>
            <h6 className="cards__item__text22">{props.text2}</h6>

            <h4 className="cards__item__miles">
              <i class="fa-solid fa-car"></i>
              {props.miles}
            </h4>
            <Button
              to={props.path}
              primary="true"
              dark="true"
              className="price__button"
            >
              Details
            </Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem2;
