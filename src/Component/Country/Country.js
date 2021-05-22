import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, flag } = props.country;
    const imageSize ={
        height : '100px',
        weight : '100px'
    }
    return (
        <div>
            <h4>Name : {name}</h4>
            <img style={imageSize} src={flag} alt="" />
            <Link to={`/${name}`}><button>Details{name}</button></Link>
            
        </div>
    );
};

export default Country;