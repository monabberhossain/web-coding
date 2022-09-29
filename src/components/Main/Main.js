import React from 'react';
import Blog from '../Blog/Blog';
import Body from '../Body/Body';
import Header from '../Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Body></Body>
            <Blog></Blog>
        </div>
    );
};

export default Main;