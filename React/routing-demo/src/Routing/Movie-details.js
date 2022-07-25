import { useParams } from "react-router-dom";
import React from 'react';
import { movies } from "./Movies-mock-data";
export default function MovieDetail() {
    let { id } = useParams();
    id = Number(id);
    const movie = movies.find((movie) => movie.id === id);
  
    return (
      <div>
        <h3>{movie.name}</h3>
        <p>{movie.description}</p>
      </div>
    );
  }