import React from 'react';
import './style.css'
import  fotohands from '../../assets/img/foto hands.svg';
import vector from '../../assets/icon/arrow.svg';
export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-info">
          <div className="footer-head">
            <h4 className="title-explore">Explore product in
              new way</h4>
            <p className="footer-text">We specialize in creating visual identities for products and branda in your
              company.
            </p>
          </div>
          <div className="input-btn">
            <input className="input-footer" type="email" name="Youremail" placeholder="Your Email"></input>
            <button className="btn-footer">Start
            <img class="vector" src={vector}alt=""/>
            </button>
          </div>
        </div>
        <img  className="foto-hands" src={fotohands} alt="">
        </img>
      </footer>

    );
}