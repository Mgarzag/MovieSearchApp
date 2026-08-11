import type { Movie } from "../../types/Movie";
import "./MovieCard.css";

// Define the props that the MovieCard component expects
interface MovieCardProps {
  // The movie object containing information such as the title, poster path, release date, and rating.
  movie: Movie;
}

// Create the MovieCard component.
// It receives a movie object through its props.
function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="no-poster">
          No poster available
        </div>
      )}

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>
          Release date: {movie.release_date || "Unknown"}
        </p>

        <p>
          Rating: {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;