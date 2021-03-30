import React, { Component } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { StyledCard } from '../Style/components/CardStyled';
import '../Style/components/Card.css';
import noImg from '../images/no-image.svg';
import Button from './Button';

class Card extends Component {
  render() {
    return (
      <StyledCard>
        <div className='card__img'>
          <img src={noImg} />
        </div>
        <div className='card__title'>
          <h4 className='card__title-text'>
            Голень Говядины
          </h4>
        </div>
        <div className='card__text'>
          <p className='text__inner'>
            Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить.
          </p>
        </div>
        <div className='card__rate'>
          <AiFillStar className='star' />
          <AiFillStar className='star' />
          <AiFillStar className='star' />
          <AiFillStar className='star' />
          <AiFillStar className='star unlike' />
        </div>
        <div className='card__price'>
          <h6 className='price__item'>1 050 ₽/кг</h6>
          <p className='price__inner'>За 500гр.</p>
        </div>
        <Button text='В корзину' />
      </StyledCard>
    );
  }
}

export default Card;
