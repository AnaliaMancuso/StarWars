import * as React from "react";
import { useState } from "react";
import Lists from "./Lists";
import getFilms from "../utils/getFilms";
import getPeople from "../utils/getPeople";
import Stack from '@mui/material/Stack';

// import { useDispatch, useSelector }  from 'react-redux';
// import { suma } from '../actions/suma';

const initialStateFilms = false;

export default function Lateral() {
  // const state = useSelector(state => state)
  // const dispatch = useDispatch();

  const [stateFilms, setStateFilms] = useState(initialStateFilms);
 
  const { films } = getFilms();
  const { people } = getPeople();

  let next = people.next;
  const handle = (e) => {
    if (e.target.value === "films") {
      setStateFilms(true);
    } else {
      setStateFilms(initialStateFilms);
    }
  };
  return (
    <div className=" container-box">
      <div className="buttons-left">
        <button value="films" onClick={handle}>
          PELICULAS 
        </button>
        <button value="people" onClick={handle}>
          PERSONAJES 
        </button>
      </div>
      <div className="lists-right">
        {stateFilms === true ? (
          <Lists
            data={films.results}
            section="Películas"
          />
        ) : (
          <Lists
          
            data={people.results}
            section="Personajes"
            next={next}
          />
        )}
      </div>
    </div>
  );
}
