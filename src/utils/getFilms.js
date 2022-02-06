import { useState, useEffect } from "react";

export default function getFilms() {
  const urlFilms = "https://swapi.dev/api/films/";

  const [films, setFilms] = useState([]);
  const [filmsTitle, setFilmsTitle] = useState([]);
  let titles = [];
  
  const fetchFilms = async () => {
    const response = await fetch(urlFilms);
    const responseJSON = await response.json();
    setFilms(responseJSON);
    
    responseJSON.results.forEach((el)=> titles.push(el.title))
    setFilmsTitle(titles)  
  };
  useEffect(() => {
    fetchFilms();
  }, []);
  
  return {
    films, filmsTitle
  }
}


