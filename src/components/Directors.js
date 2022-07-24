import React from "react";
import {directors} from "../data";

function Directors(){
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director) => (
      <div key={director} >
        Name: {director.name}
        <ul key={{director} + "movies list"} >Movies they worked on: 
          {director.movies.map((movie) => (
            <li key={"director" + {movie}}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
    </div>;
}

export default Directors;