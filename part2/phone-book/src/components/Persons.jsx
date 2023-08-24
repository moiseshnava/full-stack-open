import React from 'react'
import personsService from "../services/persons";


const Persons = ({
   copyPersonas,
   setCopyPersonas,
   setPersonas,
   personas,
   setShowNotification,
   setNotificationError,
   setNotificationMessage,
}) => {
   const handleDelete = (persona) => {
      console.log(persona);
      personsService
         .deletePerson(persona.id)
         .then(res => {
            console.log(res);
         })
         .catch(err => {
            setShowNotification(true)
            setNotificationError(true)
            setNotificationMessage(`Information of ${persona.name} has already been removed from server`)
         })

      const updatePersons = personas.filter(person => person.id !== persona.id)
      setPersonas(updatePersons)
   }

   return (
      <ul style={{ textAlign: "start" }}>
         {
            copyPersonas?.map(persona => (
               <li className='note' key={persona.name}>
                  <label htmlFor="">
                     {`${persona.name} ${persona.number}`}
                  </label>
                  <button onClick={() => handleDelete(persona)}>x</button>
               </li>

            ))
         }
      </ul>
   )
}

export default Persons