import { useState, useEffect } from "react";

export default function getFilms() {
  const urlFilms = "https://swapi.dev/api/films/";

  const [films, setFilms] = useState([]);
  
  const fetchFilms = async () => {
    const response = await fetch(urlFilms);
    const responseJSON = await response.json();
    setFilms(responseJSON);
  
  };
  useEffect(() => {
    fetchFilms();
  }, []);
  
  return {
    films
  }
}


