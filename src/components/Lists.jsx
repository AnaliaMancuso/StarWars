import * as React from "react";
import Card from "./Card";
import { useState } from "react";
import Spinner from "./Spinner";

export default function Lists({ section, data,  next }) {
  const [cards, setCards] = useState([]);
  const [show, setShow]= useState(false)

  const showCard = (e) => {
    setCards(e);
    setShow(true)
  };

  return (
    <div className="right">
      <div >
        <label>{section}</label>
        <input type="text" placeholder="Search..." />
        <ul>
          {data ? (
            data.map((item, index) =>
              item.title ? (
                <li
                  className="lists-li"
                  key={index}
                  onClick={() => showCard(item)}
                >
                  {item.title}
                </li>
              ) : (
                <li
               
                  className="lists-li"
                  key={index}
                  onClick={() => showCard(item)}
                >
                  {item.name}
                </li>
              )
            )
          ) : (
            <Spinner />
          )}
          {next != null ? (
            <button className="btn-load-more">cargar más</button>
          ) : (
            <p className="end-list">-Final del listado-</p>
          )}
        </ul>
      </div>
      <div className="">
        {show === true ? (
        <Card description={cards} />
        ) : (
         <p className="card-container end-list">Seleccione del listado para ver la descripción</p> 
        )}
      </div>
    </div>
  );
}
