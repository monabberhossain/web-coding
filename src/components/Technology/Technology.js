import React from 'react';
import './Technology.css'

const Technology = (technology, addToCartHandler) => {

    const {id, name, img, text, time} = technology.technology;    
    
    return (
        <div className='technology'>
            <img src={img} alt="" />
            <div className='technology-info'>
                <h3>{name}</h3>
                <p>{text}</p>
                <h4>Time Duration: {time}m</h4>
            </div>
            <button onClick={ () => addToCartHandler(technology.technology)} className='btn-cart'>
                <p className='btn-txt'>Add To List</p>                
            </button>
        </div>
    );
};

export default Technology;