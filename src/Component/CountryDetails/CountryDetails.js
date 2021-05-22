import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { name } = useParams();
    console.log(name);
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    }, [name]);
    const imageSize ={
        height : '100px',
        weight : '100px'
    }

    return (
        <div>
            <h1>Country name : {country.name}</h1>
            <h3>Population : {country.population}</h3>
            <h4>region : {country.region}</h4>
            <img style={imageSize} src={country.flag} alt="" />
        </div>
    );
};

export default CountryDetails;