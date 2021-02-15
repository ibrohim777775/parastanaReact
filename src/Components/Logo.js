import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../Style/Logo.css';


class Logo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <a href='#'>
                    <img className='logo__img' src={logo}></img>
                </a>
            </div>
        );
    }
}

export default Logo;
