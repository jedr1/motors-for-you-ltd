import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/ButtonElements';
import './Cards.css';
function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="cards__item__img" />
          </figure>
          <div className="cards__item__info1">
            <h1 className="cards__item__price1">{props.price}</h1>

            <h5 className="cards__item__text">{props.text}</h5>
            <h5 className="cards__item__text2">{props.text2}</h5>

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

export default CardItem;
