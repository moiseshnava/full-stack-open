import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios  from "axios";

// const initialPerson = [
//   { "name": "Arto Hellas", "phoneNumber": "12345678" },
//   { "name": "demon", "phoneNumber": "12345678" },
//   { "name": "dem", "phoneNumber": "12345678" },
//   { "name": "John Smith", "phoneNumber": "8765432101" },
//   { "name": "Alice Johnson", "phoneNumber": "9876543210" },
//   { "name": "Michael Williams", "phoneNumber": "2345678901" },
//   { "name": "Emily Brown", "phoneNumber": "3456789012" },
//   { "name": "William Jones", "phoneNumber": "4567890123" },
//   { "name": "Sophia Davis", "phoneNumber": "5678901234" },
//   { "name": "Daniel Miller", "phoneNumber": "6789012345" },
//   { "name": "Olivia Wilson", "phoneNumber": "7890123456" },
//   { "name": "James Martinez", "phoneNumber": "8901234567" },
//   { "name": "Emma Anderson", "phoneNumber": "9012345678" },
//   { "name": "Benjamin Taylor", "phoneNumber": "3456123412" },
//   { "name": "Ava Thomas", "phoneNumber": "4567234512" },
//   { "name": "Liam Garcia", "phoneNumber": "5678345612" },
//   { "name": "Mia Rodriguez", "phoneNumber": "6789456712" },
//   { "name": "Ethan Martinez", "phoneNumber": "7890567812" },
//   { "name": "Isabella Hernandez", "phoneNumber": "8901678912" },
//   { "name": "Noah Smith", "phoneNumber": "9012789012" },
//   { "name": "Oliver Johnson", "phoneNumber": "1231231212" }
// ];
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
