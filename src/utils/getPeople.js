import { useState, useEffect } from "react";

export default function getPeople() {
  const [people, setPeople] = useState([]);
  const [peopleFilms, setPeopleFilms] = useState([]);
  
  const url = "https://swapi.dev/api/people/?page=1";

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
