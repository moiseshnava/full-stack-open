import React from 'react'

const Persons = ({copyPersonas}) => {
   return (
      <ul style={{ textAlign: "start" }}>
         {
            copyPersonas?.map(persona => (
               <li key={persona.name}>{`${persona.name} ${persona.phoneNumber}`}</li>
            ))
         }
      </ul>
   )
}

export default Persons