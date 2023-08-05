import React from 'react'

const Button = ({ handleClick, label,name }) => {
   return (
      <button
      name={name}
         onClick={()=>handleClick(name)}
         style={{ backgroundColor: "#eeeeff", border: "1px solid #3333 ", borderColor: "#333" }}
      >{label}</button>
   )
}

export default Button;