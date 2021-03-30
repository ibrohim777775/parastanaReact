import React, { Component } from 'react';
import { BiPhone, BiUser } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeaderMenu from '../Components/HeaderMenu';
import Logo from '../Components/Logo';
import Burger from '../images/Burger.svg';
import '../Style/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <header className='header'>
                    <div className='container'>
                        <div className='header__body'>
                            <img className='burger' src={Burger}></img>
                            <Logo />
                            <HeaderMenu headerItems={this.props.headerItems} />
                            <div className='header__info'>
                                <div className='info__phone'>
                                    <BiPhone className='icon__phone' />
                                    <p className='phone__number'>+7 (831) 282-60-00</p>
                                </div>
                                <div className='user__login'>
                                    <BiUser onClick={() => this.props.showAuth()} className='user__icon mr' />
                                </div>
                                <div className='shopping__cart'>
                                    <FiShoppingCart className='user__icon shopping__icon' />
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

            </div>
        );
    }
}

export default Header;
