import { useState, type ChangeEvent } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { searchMovies } from './services/movieApi';

function App() {
  // State to store the search text
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
  try {
    const movies = await searchMovies(searchTerm);

    console.log(movies);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h1>Movie Search</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
  
}

export default App
