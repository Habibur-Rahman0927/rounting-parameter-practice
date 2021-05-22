import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

/*     useEffect(() => {
        axios('https://restcountries.eu/rest/v2/all')
        .then(data => setCountry(data.data))
    }, []) */


    return (
        <div>
           {/*  {
                console.log(country)
            } */}
            <h1>Country : {country.length}</h1>
            {
                country.map((country,key) => <Country country={country} key={key}></Country>)
            }
        </div>
    );
};

export default Home;