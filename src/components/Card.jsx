import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import getFilms from "../utils/getFilms";

export default function Card({ description }) {
  const { filmsTitle } = getFilms();

  let listOfMovies = [];

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

            {description.films.includes("https://swapi.dev/api/films/1/")
              ? console.log(listOfMovies.push(filmsTitle[0]))
              : console.log("not 1")}
            {description.films.includes("https://swapi.dev/api/films/2/")
              ? console.log(listOfMovies.push(filmsTitle[1]))
              : console.log("not 2")}
            {description.films.includes("https://swapi.dev/api/films/3/")
              ? console.log(listOfMovies.push(filmsTitle[2]))
              : console.log("not 3")}
            {description.films.includes("https://swapi.dev/api/films/4/")
              ? console.log(listOfMovies.push(filmsTitle[3]))
              : console.log("not 4")}
            {description.films.includes("https://swapi.dev/api/films/5/")
              ? console.log(listOfMovies.push(filmsTitle[4]))
              : console.log("not 5")}
            {description.films.includes("https://swapi.dev/api/films/6/")
              ? console.log(listOfMovies.push(filmsTitle[5]))
              : console.log("not 6")}
            <p>{listOfMovies.join(' - ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
