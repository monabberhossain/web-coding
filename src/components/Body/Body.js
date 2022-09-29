import React, { useEffect, useState } from 'react';
import Technology from '../Technology/Technology';
import './Body.css'

const Body = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect( () => {
        fetch('language.json')
        .then(res => res.json())
        .then(data => setTechnologies(data))
    }, []);
    return (
        <div className='body'>
            <h1>Select today’s study activities</h1>
            <div className='technology-container'>
            {
                technologies.map(technology => <Technology 
                    key={technology.id}
                    technology={technology}
                ></Technology>)
            }
            </div>            
        </div>
    );
};

export default Body;