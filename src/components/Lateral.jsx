import * as React from "react";
import { useState } from "react";
import Lists from "./Lists";
import getFilms from "../utils/getFilms";
import getPeople from "../utils/getPeople";

const initialStateFilms = "hide";
const initialStatePeople = "hide";

export default function Lateral() {
  const [stateFilms, setStateFilms] = useState(initialStateFilms);
  const [statePeople, setStatePeople] = useState(initialStatePeople);

  const { films } = getFilms();

  const [dataFilms, setDataFilms] = useState(films);
  const { people } = getPeople();

  const handleFilms = (e) => {
    if (e.target.value === "films") {
      setStateFilms("show");
      setStatePeople("hide");
    } else {
      setStateFilms(initialStateFilms);
    }
  };
  const handlePeople = (e) => {
    if (e.target.value === "people") {
      setStateFilms("hide");
      setStatePeople("show");
    } else {
      setStatePeople(initialStatePeople);
    }
  };

  //search handler
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newList = dataFilms.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newList);
    } else {
      setSearchResults(dataFilms);
    }
  };

  return (
    <>
      <button value="films" onClick={handleFilms}>
        peliculas
      </button>
      <button value="people" onClick={handlePeople}>
        personajes
      </button>
      <hr></hr>
      <Lists
        term={searchTerm}
        searchKeyWord={searchHandler}
        appearence={stateFilms}
        data={searchTerm.length < 1 ? films.results : searchResults}
        section="Películas"
      />
      <hr></hr>
      <Lists
        appearence={statePeople}
        data={people.results}
        section="Personajes"
      />
    </>
  );
}
