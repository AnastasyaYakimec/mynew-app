import React from "react";
import { review } from "../../mock";
import { Card } from "../Card/Card.jsx";
import { Pagination } from "../Pagination/Pagination";
import elipse2 from '../../assets/img/ellipse2.svg'
import "./style.css";


export const Cards = () => {
  return (
    <div class="cards">
      <ul class="list-variant">
        {review.map((rewiew)=><Card key={rewiew.id} rewiew={rewiew}/>) }
      </ul>
      <Pagination />

      <img
        class="ellipse2-1"
        src={elipse2}
        alt="b-gradient"
      />
    </div>
  );
};
