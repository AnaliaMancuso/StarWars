import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { suma } from "../actions/suma";

export default function getPeople() {
  const [people, setPeople] = useState([]);
  const [peopleFilms, setPeopleFilms] = useState([]);

  const url = "https://swapi.dev/api/people/?page=1";
  // url = `https://swapi.dev/api/people/?page=${page}`;

  const fetchPeople = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setPeople(responseJSON);

    
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return {
    people,
  };
}

//funcion recursiva, se sigue llamando a si misma generando callbacks
