import React from 'react'

const Filter = ({handleSearchInput,handleSearch}) => {
   return (
      <div>
         <input type="text" name="name" id="name" onChange={handleSearchInput} placeholder='search contact...' />
         <input type="button" value="search" onClick={handleSearch} />
      </div>
   )
}

export default Filter
