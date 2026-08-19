import { useState, type ChangeEvent } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { searchMovies } from './services/movieApi';
import MovieCard from "./components/MovieCard/MovieCard";
import MovieList from "./components/MovieList/MovieList";
import type { Movie } from "./types/Movie";

function App() {
  // State to store the search text
  const [searchTerm, setSearchTerm] = useState("");
  // State to store the movies
  const [movies, setMovies] = useState<Movie[]>([]);

  // Handle changes whenever the user types something into the search bar
  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    // Update the searchTerm state with the value currently entered in the input field
    setSearchTerm(event.target.value);
  };
  // Handle the search button click.
  // This function calls the movie API using the search term.
  const handleSearch = async () => {
  try {
    // Call the searchMovies function and pass the user's search term to the API.
    const results = await searchMovies(searchTerm);

    setMovies(results);
  } catch (error) {
    // Display an error in the console if the API request fails. 
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

      <div className="movie-list">
        {/* Pass the movies state to MovieList. */}
      <MovieList movies={movies} />
      </div>
      
    </div>
  );
  
}

export default App
