import React, { useState } from 'react'

const textClean = (txt) => txt.replace(/\s+/g, " ").trim();

const validatePhoneNumber = (pn) => {
   const regex = /^\d{10}$/;
   return regex.test(pn);
}

const PersonForm = ({
   personas,
   setPersonas
}) => {
   const [nameAlert, setNameAlert] = useState(false);
   const [phoneNumber, setPhoneNumber] = useState("");
   const [phoneNumberAlert, setPhoneNumberAlert] = useState(false);
   const [textAlert, setTextAlert] = useState("");
   const [textPhoneNumberAlert, setTextPhoneNumberAlert] = useState("");
   const [newName, setNewName] = useState("");

   const handleInputName = (e) => {
      setNewName(e.target.value);
   }
   const handleInputPhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
   }

   const handleSubmitForm = (e) => {
      e.preventDefault();
      if (newName.length < 2) {
         setNameAlert(true);
         setTextAlert(`the name must have a minimum of 2 characters`)
      }

      let inputName = textClean(newName);
      const newPerson = {
         name: inputName,
         phoneNumber: phoneNumber
      }
      const result = personas.find(person => person.name.toLowerCase() === inputName.toLowerCase());
      const resultPhoneNumber = validatePhoneNumber(phoneNumber);

      if (result) {
         setNameAlert(true);
         setTextAlert(`${newName} is alredy added to phonebook`);
         return
      } if (!resultPhoneNumber) {
         setPhoneNumberAlert(true);
         setTextPhoneNumberAlert("phone number must have 10 digits");
         return
      } else {
         setPersonas((prevPersonas) => [...prevPersonas, newPerson]);
         setNewName("");
         setPhoneNumber("");
         setNameAlert(false);
         setPhoneNumberAlert(false);
      }
   }

   return (

      <form onSubmit={handleSubmitForm}>
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
                     ? <label htmlFor="" style={{ color: "red" }}>{textAlert}</label>
                     : null
               }
            </div>
         </div>
         {/*  */}
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
                     ? <label htmlFor="" style={{ color: "red" }}>{textPhoneNumberAlert}</label>
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