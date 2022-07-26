import React from "react";
import { Card } from "../Card/Card.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import elipse2 from "../../assets/img/ellipse2.svg";
import "./style.css";

export const Cards = ({ rewiew, onClick, cards }) => {
  const date = Date.now();
  console.log(date);
  // localStorage.clear()
  return (
    <div className="cards">
      <ul className="list-variant">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={onClick} />
        ))}
      </ul>
      <Pagination />

      <img className="ellipse2-1" src={elipse2} alt="b-gradient" />
    </div>
  );
};
