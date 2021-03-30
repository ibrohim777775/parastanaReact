import React, { Component } from 'react';
import noImg from '../images/no-image.svg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../Style/containers/AboutProduct.css';

class AboutProduct extends Component {
  render() {
    return (
      <div className='about__body'>
        <section className='about__product'>
          <section className='product__img'>
            <img className='no-img' src={noImg} />
          </section>
          <section className='product__items'>
            <h2 className='product__title'>Говядина 250гр</h2>
            <section className='product__rate'>
              <AiFillStar className='product__star' />
              <AiFillStar className='product__star' />
              <AiFillStar className='product__star' />
              <AiFillStar className='product__star' />
              <AiFillStar className='product__star' />
            </section>
            <section className='product__comment-number'>
              <p className='comment__text'> Кол-во отзывов:  </p>
              <span className='comment__number'>23</span>
            </section>
            <div className='product__inners'>
              <h6 className='product__text'>Цена за уп.</h6>
              <h5 className='product__cost'>1 050 ₽</h5>
            </div>
            <div className='product__inners'>
              <h6 className='product__text'>Кол-во шт в упаковке</h6>
              <h5 className='product__cost'>4 шт.</h5>
            </div>
            <div className='product__inners'>
              <h6 className='product__text'>Количество</h6>
              <h5 className='product__cost'>4 шт.</h5>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default AboutProduct;
