import React from "react";
import {movies} from "../data";

function Movies(){
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => (
      <div key={movie} >
        <h3>Movie Title: {movie.title}</h3>
        <h3>Time: {movie.time} minutes</h3>
        <ul key={{movie} + movie.genres}> Genres:
          {movie.genres.map((genre) => (
            <li key={{movie} + {genre}}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Movies;