import React, { useState } from "react";
import smallavatar from "../../assets/img/smallavatar.svg";
import { UserMenu } from "../UserMenu/UserMenu.jsx";
import "./style.css";

export const HeaderUser = (onClick) => {

  
  const [stateAvatar, setstateAvatar] = useState( );
  const clickAvatar = () => {
    setstateAvatar(true);
  };

  const closeAvatar = () => {
    setstateAvatar(false);
  };
  const menuUser = stateAvatar ? (
    <UserMenu closeAvatar={closeAvatar} onClick={onClick} />
  ) : (
    false
  );

  return (
    <div className="header-user">
      <div className="container">
        <div className="header-wrap">
          <a className="header_logo" href="index.html">
            Light
          </a>
          <nav className="header_nav">
            <ul className="nav-list">
              <li className="nav-list_item">
                <a href="/home" className="nav-list_link">
                  Home
                </a>
              </li>
              <li className="nav-list_item">
                <a href="/company" className="nav-list_link">
                  Company
                </a>
              </li>
              <li className="nav-list_item">
                <a href="/features" className="nav-list_link">
                  Features
                </a>
              </li>
              <img
                className="smallavatar"
                src={smallavatar}
                alt="uuu"
                onClick={clickAvatar}
              />
            </ul>
          </nav>
        </div>
      </div>
      {menuUser}
    </div>
  );
};
