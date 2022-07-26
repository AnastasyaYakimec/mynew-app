import React from "react";
import { useState } from "react";
import "./style.css";

export const Dialog = ({ open, onSubmit, onClose, isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.setItem("userEmail", JSON.stringify(email));
  localStorage.setItem("userPassword", JSON.stringify(password));

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <div className={`modal ${open ? "modalOpen" : ""}`}>
        <h1 className="sign-in_title">Sign in</h1>
        <form className="sign-in_form" action="#" onSubmit={onSubmit}>
          <input
            className="email input"
            value={email}
            type="email"
            name="email"
            placeholder="Email or username"
            onChange={handlerEmail}
          />
          <input
            className="password input"
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlerPassword}
          />
          <button className="btn" onClick={isLogin}>
            Sign in
          </button>

          <button className="close" onClick={onClose}>
            &times;
          </button>
        </form>
      </div>
    </div>
  );
};
