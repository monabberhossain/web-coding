import React, { useEffect, useState } from 'react';
import { addToLS, getCartStatus } from '../../utilities/manageCart';
import Technology from '../Technology/Technology';
import Blog from '../Blog/Blog';
import './Body.css'

const Body = () => {
    const [technologies, setTechnologies] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('language.json')
        .then(res => res.json())
        .then(data => setTechnologies(data))
    }, []);
    

    const addToCartHandler = selectedProduct => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }        
        setCart(newCart);
        addToLS(selectedProduct.id);
    }

    return (
        <div className='body'>
            <h1 className='headline'>Select today’s study activities</h1>
            <div className='technology-container'>
            {
                technologies.map(technology => <Technology 
                    key={technology.id}
                    technology={technology}
                    addToCartHandler={addToCartHandler}
                ></Technology>)
            }
            </div>            
            <Blog></Blog>
        </div>
    );
};

export default Body;