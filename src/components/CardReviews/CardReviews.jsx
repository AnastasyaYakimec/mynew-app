import React from "react";
import { CardUser } from "../CardUser/CardUser";
import { Reviews } from "../../mock"
import './style.css'


export const CardReviews = () => {
  return (
    <div>
      <div className="card-reviews">
        <div className="reviews">
          <h4 className="reviews-title">What our clients say</h4>
          <p className="reviews-description">
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
        </div>
        <ul className="card-reviews_list">
          {Reviews.map((rewiew)=><CardUser  key={rewiew.id} rewiew={rewiew}/>) }
        </ul>
      </div>
    </div>
  );
};
