import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from "axios";
import personsService from "./services/persons";

function App() {
  const [personas, setPersonas] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [copyPersonas, setCopyPersonas] = useState([]);
  
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
      <h2>Phonebook</h2>
      <Filter handleSearchInput={handleSearchInput} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        personas={personas}
        setPersonas={setPersonas}
        setCopyPersonas={setCopyPersonas}
      />
      <h2>Numbers</h2>
      <Persons
        copyPersonas={copyPersonas}
        setPersonas={setPersonas}
        personas={personas}
        setCopyPersonas={setCopyPersonas}
        
      />
    </div>
  )
}

export default App
