import React, { useState } from "react";
import vector2 from "../../assets/img/vector2.svg";
import { AddingCard } from "../AddingCard/AddingCard.jsx";
import "./style.css";



export const UserMenu = ({ clickAvatar, clickCardManagement }) => {
  const [openAddingCard, setOpenAddingCard] = useState(false);
  const [qwerty, setQwerty] = useState();
  const qwe = () => {
    setQwerty(qwerty.push({ asdfsd: 2 }));
    console.log(qwerty)
  };
  const cclickCardManagement = () => {
    setOpenAddingCard(!openAddingCard);
  };

  const wwwwww = openAddingCard ? (
    <AddingCard clickCardManagement={clickCardManagement} />
  ) : (
    false
  );

  return (
    <div className="user-menu-registered">
      <div className="header-registered">
        <h4 className="user-menu-title-registered">User menu</h4>
        <img
          className="user-menu-vector-registered"
          src={vector2}
          alt=""
          onClick={clickAvatar}
        ></img>
      </div>
      <ul className="menu-registered">
        <li className="menu-item-registered">Recently Added</li>
        <li className="menu-item-registered" onClick={cclickCardManagement}>
          Card management
        </li>
        <li className="menu-item-registered">Log out</li>
      </ul>
      <button onClick={qwe}>qqqqqqqqqqqqq</button>
      {wwwwww}
    </div>
  );
};
