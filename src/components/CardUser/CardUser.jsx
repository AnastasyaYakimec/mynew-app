import React from "react";
import avatar1 from "../../assets/img/avatar1.svg";
import "./style.css";


export const CardUser = ({ rewiew }) => {
  return (
    <li className="card-user">
      <span className="card-title">
      starstar <span> star</span>
      </span>
      <p className="card-desc">{rewiew.desc}</p>
      <div className="user-info">
        <img className="avatar-girl"  src={avatar1} alt="avatar1" >{rewiew.avatar }</img>
        <div className="card-footer-div">
          <span className="card-footer-span">{rewiew.name}</span>
          <span className="card-footer-span-email">{rewiew.adress}</span>
        </div>
      </div>
    </li>
  );
};
