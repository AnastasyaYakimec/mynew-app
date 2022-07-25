import React from "react";
// import { HeaderUser } from "../HeaderUser/HeaderUser.jsx";
import "./style.css";

export const Dialog = ({ open, onSubmit, onClose, isLogin }) => {
  


  // const openHeaderUser = () => {};
  return (
    <div className="sign-in">
      <div className={`modal ${open ? "modalOpen" : ""}`}>
        <h1 className="sign-in_title">Sign in</h1>
        <form className="sign-in_form" action="#" onSubmit={onSubmit}>
          <input
            className="email input"
            type="email"
            name="email"
            placeholder="Email or username"
          />
          <input
            className="password input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="btn" onClick={isLogin}>
            Sign in
          </button>

          <button className="close" onClick={onClose}>
            &times;
          </button>
        </form>
      </div>
      {/* <HeaderUser /> */}
    </div>
  );
};
