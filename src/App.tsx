import { useState, type ChangeEvent } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  // State to store the search text
  const [searchTerm, setSearchTerm] = useState("");

  // Update state whenever the user types
  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Movie Search</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <p>You searched for: {searchTerm}</p>
    </div>
  );
  
}

export default App
