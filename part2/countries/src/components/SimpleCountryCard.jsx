import React, { useEffect } from 'react'

const SimpleCountryCard = ({ country, copyCountries, setCopyCountries }) => {

   const handleShowButton = () => {
      setCopyCountries([country])
   }

   return (
      <li
         style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            listStyle: "none",
            borderBottom: "1px solid #6f6f6f",
            margin: "2px",


         }}>
         <label>{country.name?.common}</label>
         <button
            onClick={handleShowButton}
            style={{ border: "1px solid #6f6f6f", }}
         >
            show
         </button>
      </li>
   )
}

export default SimpleCountryCard