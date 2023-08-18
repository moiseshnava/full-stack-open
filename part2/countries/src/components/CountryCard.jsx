import axios from 'axios';
import React, { useEffect, useState } from 'react'
const api_key_weather = import.meta.env.VITE_REACT_APP_API_KEY;

const CountryCard = ({ country, countries, setCopyCountries }) => {
   const [weather, setWeather] = useState({
      temp: "",
      wind: ""
   });
   const handleBackButton = () => {
      setCopyCountries(countries)
   }

   useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${(country.capital[0])}&appid=${api_key_weather}`)
         .then(res => {
            console.log(res);
            setWeather({
               temp: res.data.main.temp,
               wind: res.data.wind
            })
         })
         .catch(error => {
            console.log(error);
         });
   }, [])

   return (
      <li>
         <div>
            <button onClick={handleBackButton}>Back</button>
         </div>
         <div>
            <h1>{country.name?.common}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
         </div>
         <h2>languages</h2>
         <ul>
            {
               Object?.values(country.languages)?.map(language => (
                  <li key={country.name.common + language}>{language}</li>
               ))
            }
         </ul>
         <figure>
            <img src={country.flags.png} alt={country.flags.alt} />
         </figure>
         <h2>{`Weather in ${country.name.common}`}</h2>
         <div>
            <p>{`temperature: ${weather.temp}  `}</p>
            <p>{`wind: ${weather.wind.speed}`}</p>
         </div>
      </li>
   )
}

export default CountryCard;