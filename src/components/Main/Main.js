import React from 'react';
import Body from '../Body/Body';
import Side from '../Side/Side';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <Body></Body>            
            <Side></Side>
        </div>
    );
};

export default Main;