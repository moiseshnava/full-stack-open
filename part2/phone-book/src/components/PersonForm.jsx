import React, { useState } from 'react'
import personsService from "../services/persons";

const textClean = (txt) => txt.replace(/\s+/g, " ").trim();

const validatePhoneNumber = (pn) => {
   const regex = /^\d{10}$/;
   return regex.test(pn);
}

const PersonForm = ({
   personas,
   setPersonas,
   setCopyPersonas,
   setShowNotification,
   setNotificationError,
   setNotificationMessage,
}) => {
   const [nameAlert, setNameAlert] = useState(false);
   const [phoneNumber, setPhoneNumber] = useState("");
   const [phoneNumberAlert, setPhoneNumberAlert] = useState(false);
   const [textAlert, setTextAlert] = useState("");
   const [textPhoneNumberAlert, setTextPhoneNumberAlert] = useState("");
   const [newName, setNewName] = useState("");

   const handleInputName = (e) => {
      setNewName(e.target.value);
      setNameAlert(false);
   }
   const handleInputPhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
      setPhoneNumberAlert(false);
   }

   const handleSubmitForm = (e) => {
      e.preventDefault();

      if (newName.length < 2) {
         setNameAlert(true);
         return setTextAlert(`the name must have a minimum of 2 characters`)
      }

      let inputName = textClean(newName);
      const newPerson = {
         name: inputName,
         number: phoneNumber
      }
      const result = personas.find(person => person.name.toLowerCase() === inputName.toLowerCase());
      const resultPhoneNumber = validatePhoneNumber(phoneNumber);

      if (!resultPhoneNumber) {
         setPhoneNumberAlert(true);
         setTextPhoneNumberAlert("phone number must have 10 digits");
         return
      }
      if (result) {
         if (window.confirm(`${newName} is alredy added to phonebook, replace the old number with a new one?`)) {
            personsService
               .update(result.id, newPerson)
               .then(res => {
                  window.confirm(`${newName} is alredy update.`)
               });
            personsService.getAll()
               .then(res => setPersonas(res))
            setNewName("");
            setPhoneNumber("");
            setNameAlert(false);
            setPhoneNumberAlert(false);
            setShowNotification(true);
            setShowError(false)
         }
         return
      } else {
         personsService
            .create(newPerson)
            .then(res => {
               setPersonas(personas.concat(res))
               setNotificationMessage(`Added ${newPerson.name}`)
               setNewName("");
               setPhoneNumber("");
               setNameAlert(false);
               setPhoneNumberAlert(false);
               setNotificationMessage(`Added ${res.name}`);
               setShowNotification(true);
               setShowError(false)
            });
      }
   }

   return (

      <form onSubmit={handleSubmitForm} className='person-form'>
         <div>
            <div>
               <label htmlFor="name">name: </label>
               <input
                  type="text"
                  value={newName}
                  onChange={handleInputName}
                  placeholder='new person...'
               />
            </div>
            <div>
               {
                  nameAlert
                     ? <label htmlFor="" className='error'>{textAlert}</label>
                     : null
               }
            </div>
         </div>
         <div>
            <div>
               <label htmlFor="name">number: </label>
               <input
                  type='number'
                  value={phoneNumber}
                  onChange={handleInputPhoneNumber}
                  placeholder='phone number...'
                  min={0}
               />
            </div>
            <div>
               {
                  phoneNumberAlert
                     ? <label htmlFor="" className='error'>{textPhoneNumberAlert}</label>
                     : null
               }
            </div>
         </div>
         <div>
         </div>
         <div>
            <button>add</button>
         </div>
      </form>
   )
}

export default PersonForm