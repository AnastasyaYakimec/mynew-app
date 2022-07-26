import React, { useState } from "react";
import headerEllipse from "../../assets/icon/headerEllipse.svg";
import { Dialog } from "../Dialog/Dialog.jsx";
import { HeaderUser } from "../HeaderUser/HeaderUser.jsx";
import "./style.css";

export const Header = (onClick) => {
  const storedEmail = JSON.parse(localStorage.getItem("userEmail"));
  const storedPassword = JSON.parse(localStorage.getItem("userPassword"));

  const user = {
    email: "user@user.com",
    password: 'qwerty',
  };
  const [isDialogVisible, setIsDialogVisible] = useState(
    
  );

  const [isAuth, setIsAuth] = useState((user.email === storedEmail && user.password === storedPassword));

  const isLogin = () => {
    setIsAuth(true)
    
  };

  const handleOpenDialog = () => {
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  const handleSubmitSignInDialog = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header-container">
      <img className="headerellipse" src={headerEllipse} alt=""></img>
      {isAuth ? ( <HeaderUser onClick={onClick} /> ) : (
        <div className="header">
          <a href="index.html" className="header_logo">
            Light
          </a>
          <div className="header-wrap">
            <nav className="header_nav">
              <ul className="nav-list">
                <li className="nav-list_item">
                  <a href="/" className="nav-list_link">
                    Home
                  </a>
                </li>
                <li className="nav-list_item">
                  <a href="/" className="nav-list_link">
                    Company
                  </a>
                </li>
                <li className="nav-list_item">
                  <a href="/" className="nav-list_link">
                    Features
                  </a>
                </li>
                <button className="btn-box" onClick={handleOpenDialog}>
                  Sign in
                </button>

                {isDialogVisible && ( <Dialog
                    open={isDialogVisible}
                    onSubmit={handleSubmitSignInDialog}
                    onClose={handleCloseDialog}
                    isLogin={isLogin}
                  />
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
