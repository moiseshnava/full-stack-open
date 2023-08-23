import React from 'react'
import personsService from "../services/persons";


const Persons = ({
   copyPersonas,
   setCopyPersonas,
   setPersonas,
   personas
}) => {
   const handleDelete = (id) => {
      personsService
         .deletePerson(id)

      const updatePersons = personas.filter(persona => persona.id !== id )
      setPersonas(updatePersons)
   }

   return (
      <ul style={{ textAlign: "start" }}>
         {
            copyPersonas?.map(persona => (
               <li key={persona.name}>
                  <label htmlFor="">
                     {`${persona.name} ${persona.number}`}
                  </label>
                  <button onClick={() => handleDelete(persona.id)}>x</button>
               </li>

            ))
         }
      </ul>
   )
}

export default Persons