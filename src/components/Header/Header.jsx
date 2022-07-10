import React from 'react';
import './style.css'
import headerellipse from "../../assets/icon/headerellipse.svg"
import { Button } from '../Button/Button';
export const Header = () => {
  return (
    <div className='header-container'>
       <img className='headerellipse' src={headerellipse} alt=""></img>
      <div id="notLoginHeader" className="header">
        <a href="index.html" className="header_logo">
          Light
        </a>
        <div className="header-wrap">
          <nav className="header_nav">
            <ul className="nav-list">
              <li className="nav-list_item">
                <a href="/" className="nav-list_link">Home</a>
              </li>
              <li className="nav-list_item">
                <a href="/" className="nav-list_link">Company</a>
              </li>
              <li class="nav-list_item">
                <a href="/" class="nav-list_link">Features</a>
              </li>
           <Button/>
            </ul>
          </nav>
          
        </div>
      </div>
    </div>
  );
}


