import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flags, area, region, population} = props.country;
    return (
        <div className='country-box'>
            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <h4>Region: {region}</h4>
            <h4><small>Area: {area}</small></h4>
            <h5>Population: {population}</h5>
            
        </div>
    );
};

export default Country;