import React, { useEffect, useState } from 'react'

const CountriesForm = ({
   copyCountries,
   setCopyCountries,
   countries,
   setAlert,
   alert
}) => {
   const [countryName, setCountryName] = useState("");

   useEffect(() => {
      if (countryName.length === 0) {
         setCopyCountries(countries)
      } else {
         const searchCountry = countries.filter(
            country => (country.name?.common.toLowerCase().trim().split(" ").join("")
               .includes(countryName.toLowerCase().trim().split(" ").join("")))
         );
         if (searchCountry.length >= 10) return setAlert(true);

         const onlyOneCountry = searchCountry.find(
            country => country.name.common.toLowerCase() === countryName.toLocaleLowerCase()
         )
         if (onlyOneCountry) return setCopyCountries([onlyOneCountry]);
         return setCopyCountries(searchCountry);
      }
   }, [countryName, setCopyCountries]);

   const handleInputCountryName = (e) => setCountryName(e.target.value);

   const handleCountriesForm = (e) => e.preventDefault();

   return (
      <form onSubmit={handleCountriesForm}>
         <div>
            <label htmlFor="">find countries</label>
            <input
               type="text"
               name=""
               id=""
               onChange={e => handleInputCountryName(e)}
            />
         </div>

      </form>
   )
}

export default CountriesForm