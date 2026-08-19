import type { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard/MovieCard";

// Define the props that the MovieList component expects.
interface MovieListProps {
// An array containing Movie objects.
  movies: Movie[];
}

// Create the MovieList component.
// Destructure the movies array from the component's props.
function MovieList({ movies }: MovieListProps) {
  return (
    <div className="movie-list">
    {/* 
        Loop through the movies array.
        map() creates a MovieCard for each movie.
      */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MovieList;