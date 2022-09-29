import React from 'react';
import logo from '../../../src/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>            
            <img src={logo} alt="" />
            <h1>Web Coding</h1>
        </div>
    );
};

export default Header;