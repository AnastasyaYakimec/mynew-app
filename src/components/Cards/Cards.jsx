import React from "react";
import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import "./style.css";
import elipse2 from '../../assets/img/ellipse2.svg'

export const Cards = () => {
  return (
    <div class="card">
      <ul id="list-shop-variant" class="list-variant">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
