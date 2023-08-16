import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import CountriesForm from './components/CountriesForm';

function App() {
  const [countries, setCountries] = useState([]);
  const [copyCountries, setCopyCountries] = useState(countries);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => setCountries(res.data));
  }, []);

  useEffect(() => {
    setCopyCountries(countries);
  }, [countries])

  useEffect(() => {
    if (copyCountries === countries && alert === true) setAlert(false);

  }, [copyCountries, alert])

  return (
    <div>
      <h1>countries</h1>
      <CountriesForm
        copyCountries={copyCountries}
        setCopyCountries={setCopyCountries}
        countries={countries}
        setAlert={setAlert}
        alert={alert}
      />
      {
        copyCountries
        &&
        <ul>
          {
            (copyCountries?.length >= 10 && alert &&
              <p>{"Too many matches, specify another filter"}</p>)
            ||
            (
              copyCountries?.length === 1 ?
                copyCountries?.map(country => (
                  <li key={country.name?.common}>
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

                  </li>))
                : copyCountries?.map(country => (
                  <li key={country.name?.common}>
                    {country.name?.common}
                  </li>
                ))
            )
          }

        </ul>

      }
    </div>
  )
}

export default App
