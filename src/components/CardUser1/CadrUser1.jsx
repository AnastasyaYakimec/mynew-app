import React from "react";
import "./style.css";
import avatar1 from "../../assets/img/avatar1.svg";

export const CadrUser1 = () => {
  return (
    <li className="cart-user-1">
      <span className="cart-title">
      starstar <span> star</span>
      </span>
      <p className="cart-p">
        I know in real-time where the money is spent,and i don't have to land
        out the company's credit card anymore.What is relirf!
      </p>
      <div className="user-info">
        <img className="avatar-girl" src={avatar1} alt="avatar1" />
        <div className="cart-footer-div">
          <span className="cart-footer-span">Denny Hilguston</span>
          <span className="cart-footer-span-email">@denny.hill</span>
        </div>
      </div>
    </li>
  );
};
