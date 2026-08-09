const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

// Export an async function to search for movies by name
export async function searchMovies(searchTerm: string) {
  // Wait for the fetch request to get data from the API endpoint
  const response = await fetch(
    // Build the URL with the encoded search term and API key
    `${BASE_URL}?query=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}`
  );

  // Check if the HTTP response status is not OK (e.g., 404 or 500)
  if (!response.ok) {
    // Halt execution and pass the error message to the catch block
    throw new Error("Failed to fetch movies");
  }
  // Parse the response body as JSON
  const data = await response.json();

  // Return only the movie results from the API response
  return data.results;
}