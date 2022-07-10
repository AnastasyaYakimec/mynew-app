import React from "react";
import { CadrUser1 } from "../CardUser1/CadrUser1";
import './style.css'

export const CardReviews = () => {
  return (
    <div>
      <div className="cart-reviews">
        <div className="reviews">
          <h4 className="title-reviews">What our clients say</h4>
          <p className="text-reviews">
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
        </div>
        <ul id="listCartUser" className="list-cart-user">
            <CadrUser1/>
            <CadrUser1/>
            <CadrUser1/>
        </ul>
      </div>
    </div>
  );
};
