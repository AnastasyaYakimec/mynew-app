import React, { useState } from "react";
import vector2 from "../../assets/img/vector2.svg";
import { AddingCard } from "../AddingCard/AddingCard.jsx";
import "./style.css";

export const UserMenu = ({ closeAvatar, clickCardManagement, onClick }) => {
  const [openAddingCard, setOpenAddingCard] = useState(false);
  const cclickCardManagement = () => {
    setOpenAddingCard(true);
  };
  const closeAddCards = (e) => {
    e.preventDefault();
    setOpenAddingCard(false);
  };

  const open = openAddingCard ? (
    <AddingCard
      clickCardManagement={clickCardManagement}
      closeAddCards={closeAddCards}
      onClick={onClick}
    />
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
          onClick={closeAvatar}
        ></img>
      </div>
      <ul className="menu-registered">
        <li className="menu-item-registered">Recently Added</li>
        <li className="menu-item-registered" onClick={cclickCardManagement}>
          Card management
        </li>
        <li className="menu-item-registered">Log out</li>
      </ul>

      {open}
    </div>
  );
};
