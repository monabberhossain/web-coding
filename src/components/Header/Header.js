import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1>this is header</h1>
                <img src={logo} alt="" />            
            </nav>
        </div>
    );
};

export default Header;