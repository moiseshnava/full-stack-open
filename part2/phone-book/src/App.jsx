import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from "./services/persons";
import Notification from './components/Notification';

function App() {
  const [personas, setPersonas] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [copyPersonas, setCopyPersonas] = useState([]);
  const [notificationError, setNotificationError] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  useEffect(() => {
    personsService
      .getAll()
      .then(res => setPersonas(res))
  }, [])

  useEffect(() => {
    if (searchInput.length < 2) setCopyPersonas(personas);
  }, [searchInput]);

  useEffect(() => {
    setCopyPersonas(personas)
  }, [personas])

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = () => {
    if (searchInput.length > 1) {
      const person = personas.filter(
        persona => persona.name.toLowerCase().trim().split(" ").join("").includes(searchInput.toLowerCase().trim().split(" ").join(""))
      )
      setCopyPersonas(person);
    }
  }
  return (
    <div>
      <h1>Phonebook</h1>
      {
        showNotification &&
        <Notification
          message={notificationMessage}
          error={notificationError}
          setNotificationMessage={setNotificationMessage}
          setShowNotification={setShowNotification}
        />
      }
      <Filter handleSearchInput={handleSearchInput} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        personas={personas}
        setPersonas={setPersonas}
        setCopyPersonas={setCopyPersonas}
        setShowNotification={setShowNotification}
        setNotificationError={setNotificationError}
        setNotificationMessage={setNotificationMessage}
      />
      <h2>Numbers</h2>
      <Persons
        copyPersonas={copyPersonas}
        setPersonas={setPersonas}
        personas={personas}
        setCopyPersonas={setCopyPersonas}
        setShowNotification={setShowNotification}
        setNotificationError={setNotificationError}
        setNotificationMessage={setNotificationMessage}

      />
    </div>
  )
}

export default App
