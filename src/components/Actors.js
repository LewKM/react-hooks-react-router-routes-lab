import React from "react";
import {actors} from "../data";

function Actors(){
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor) => (
      <div key={actor} >
        Name: {actor.name}
        <ul key={{actor} + "movie list"} >Movies they worked on:
          {actor.movies.map((movie) => (
            <li key={{actor} + {movie}} >{movie}</li>
          ))}
        </ul>
      </div>
    ))}
    </div>;
}

export default Actors;