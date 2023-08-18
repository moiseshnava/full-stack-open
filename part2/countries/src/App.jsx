import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import CountriesForm from './components/CountriesForm';
import CountryCard from './components/CountryCard';
import SimpleCountryCard from './components/SimpleCountryCard';

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
  }, [countries]);

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
            (
              (alert === true) &&
              <p>{"Too many matches, specify another filter"}</p>
            )
            ||
            (
              copyCountries?.length === 1 ?
                copyCountries?.map(country => (
                  <CountryCard
                    country={country}
                    countries={countries}
                    setCopyCountries={setCopyCountries}
                    key={country.name?.common}
                  />

                ))
                : copyCountries?.map(country => (
                  <SimpleCountryCard
                    country={country}
                    copyCountry={copyCountries}
                    setCopyCountries={setCopyCountries}
                    key={country.name?.common + 1}
                  />

                ))
            )
          }
        </ul>
      }
    </div>
  )
}

export default App
