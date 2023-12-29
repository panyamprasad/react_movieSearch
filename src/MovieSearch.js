import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Card } from "@mui/material";
import Button from "./common/Button";
import SearchBar from "./common/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./slice/movieSlice";

const MovieSearch = () => {
  //const [movieName, setMovieName] = useState(null);
  //const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  // const onTextChange = (text) => {
  //   setMovieName(text);
  // };

  // const handleSearch = () => {
  //   searchMovies();
  // };

  //Fetching the movie details based on movie name
  // const searchMovies = async () => {
  //   const apiKey = "e8ccc676e299173067a80520c1fee405";
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;

  //   try {
  //     const response = await axios.get(url);
  //     setMovies(response.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const onTextChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchMovies(searchQuery));
  };

  return (
    <div className="grid_align">
      &nbsp;
      <Grid>
        <center>
          <div>
            Movie Name : &nbsp;
            <SearchBar onChange={onTextChange} />
            &nbsp;
            <Button onClick={handleSearch} label="Search" />
          </div>
        </center>
      </Grid>
      &nbsp;&nbsp;
      <Grid className="grid_align">
        {status === "loading" && <p>Loading....</p>}
        {status === "succeeded" &&
          movies.map((movie) => (
            <div>
              <Card sx={{ display: "flex" }}>
                <Box style={{ padding: "10px" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt="Movie Poster"
                  />
                </Box>
                <Box style={{ padding: "20px" }}>
                  <Typography component="div" variant="h5" align="left">
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    Language : {movie.original_language}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    Release Data: {movie.release_date}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                    align="left"
                  >
                    Rating : {movie.vote_average}
                  </Typography>
                  <Typography
                    style={{ color: "#696969", fontSize: "14px" }}
                    variant="h6"
                    align="left"
                  >
                    Story: {movie.overview}
                  </Typography>
                </Box>
              </Card>
              &nbsp;
            </div>
          ))}
        {status === "failed" && <p>Error: {error}</p>}
      </Grid>
    </div>
  );
};

export default MovieSearch;
