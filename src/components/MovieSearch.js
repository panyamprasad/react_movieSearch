import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const apiKey = "e8ccc676e299173067a80520c1fee405"; // Replace with your TMDb API key

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      setMovies(response.data.results);

      const movies = response.data.results;
      navigate(`/movies?query=${query}`, { movies });
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <center>
        <h2>Movie Search</h2>
        <form onSubmit={searchMovies}>
          <div>
            Movie Name : &nbsp;
            <input
              type="text"
              placeholder="Enter a Movie Name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            &nbsp;
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default MovieSearch;
