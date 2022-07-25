import React from 'react'
import photohands from '../../assets/img/photo-hands.svg';
import vector from '../../assets/icon/arrow.svg';
import './style.css'

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-info">
          <div className="footer-head">
            <h4 className="footer-title-explore">Explore product in
              new way</h4>
      <img className='title-explore' src="icon" alt="" />
            <p className="footer-text">We specialize in creating visual identities for products and branda in your
              company.
            </p>
          </div>
          <div className="input-btn">
            <input className="input-footer" type="email" name="Youremail" placeholder="Your Email"/>
            <button className="btn-footer">Start
            <img className='vector' src={vector}alt=""/>
            </button>
          </div>
        </div>
        <img  className="photo-hands" src={photohands} alt=""></img>
       
      </footer>

    );
}