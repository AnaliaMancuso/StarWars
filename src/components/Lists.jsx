import * as React from "react";
import Card from "./Card";
import { useState, useRef } from "react";
import Spinner from './Spinner';

export default function Lists({ section, data, appearence, term, searchKeyWord }) {
  const initialCardState = "hide";
  const [cards, setCards] = useState([]);
  const [displayCard, setDisplayCard] = useState(initialCardState);

  //search
  const inputValue = useRef('');
  const getSearchTerm =()=> {
    searchKeyWord(inputValue.current.value)
  };
  
  const showCard = (e) => {
    setCards(e);
    setDisplayCard("show");
  };

  return (
    <div className={appearence}>
      <label>{section}</label>
      <input
        type="text"
        placeholder="Search..."
        ref={inputValue}
        value={term}
        onChange={getSearchTerm}
      />
      <ul>
        {data ? (
          data.map((item, index) =>
            item.title ? (
              <li key={index} onClick={() => showCard(item)}>
                {item.title}
              </li>
            ) : (
              <li key={index} onClick={() => showCard(item)}>
                {item.name}
              </li>
            )
          )
        ) : (
          <Spinner/>
        )}
      </ul>
      <Card display={displayCard}  description={cards} />
    </div>
  );
}
