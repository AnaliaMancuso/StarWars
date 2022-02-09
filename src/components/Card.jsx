import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Card({ description, filmsCh }) {
  const [characterFilms, setCharacterFilms] = useState([]);
 
  const fetchFilm = async () => {
    const titleUrl = [];
    for (let i = 0; i < filmsCh.length; i++) {
      const response = await fetch(filmsCh[i]);
      const responseJSON = await response.json();
      titleUrl.push(responseJSON.title);
    }
    setCharacterFilms(titleUrl);
  };
  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <div className="">
      <div className="card-container">
        <p className="title-card">Descripción: </p>
        {!description ? (
          <Spinner />
        ) : description.title ? (
          <div className="card-information">
            <p>
              <span>Título:</span> {description.title}
            </p>
            <p>
              <span>Director:</span> {description.director}
            </p>
            <p>
              <span>Productor:</span> {description.producer}
            </p>
            <p>
              <span>Fecha de estreno:</span> {description.release_date}
            </p>
          </div>
        ) : (
          <div className="card-information">
            <p>
              <span>Nombre:</span> {description.name}
            </p>
            <p>
              <span>Color de ojos:</span> {description.eye_color}
            </p>
            <p>
              <span>Altura:</span> {description.height}
            </p>
            <p>
              <span>Peso: </span>
              {description.mass}
            </p>
            <p>
              <span>Peliculas en las que apareció:</span>
            </p>
            <ul>
              {characterFilms.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
