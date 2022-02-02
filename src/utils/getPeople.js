import { useState, useEffect } from "react";

export default function getPeople() {
  const urlPeople = "https://swapi.dev/api/people/?page=2";

  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const response = await fetch(urlPeople);
    const responseJSON = await response.json();
    setPeople(responseJSON);
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return {
    people
  }
}


