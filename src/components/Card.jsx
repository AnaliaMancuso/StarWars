import React from "react";
import { useState, useEffect } from "react";
import Spinner from './Spinner';

export default function Card({ description, display }) {

  return (
    <div className={display}>
      <p>Descripción </p>
      {!description ? (
        <Spinner/>
      ) : description.title ? (
        <div>
          <p>Título: {description.title}</p>
          <p>Director: {description.director}</p>
          <p>Productor: {description.producer}</p>
          <p>Fecha de estreno: {description.release_date}</p>
        </div>

      ) : (
        <div>
          <p>Nombre: {description.name}</p>
          <p>Color de ojos: {description.eye_color}</p>
          <p>Altura: {description.height}</p>
          <p>Peso: {description.mass}</p>
          <p>Peliculas en las que apareció:</p>
          {/* {descriptionFilms.map((item)=>
          <p>{item}</p>)} */}
          {description.films}
        </div>
      )}
    </div>
  );
}
