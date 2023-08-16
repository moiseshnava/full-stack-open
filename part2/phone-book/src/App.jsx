import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios  from "axios";

function App() {
  const [personas, setPersonas] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [copyPersonas, setCopyPersonas] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => setPersonas(response.data))
    
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
      />
      <h2>Numbers</h2>
      <Persons copyPersonas={copyPersonas} />
    </div>
  )
}

export default App
