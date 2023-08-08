import React from 'react'

const Button = ({ handleClick, label, name }) => {
   return (
      <div name={name} onClick={() => handleClick()}>{label}</div>
   )
}

export default Button