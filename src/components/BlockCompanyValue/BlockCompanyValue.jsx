
import elipse2 from '../../assets/img/ellipse2.svg'
import elipse3 from '../../assets/img/ellipse3.svg'
import embleme from '../../assets/img/emblem.svg'
import icon1 from '../../assets/icon/icon/icon1.svg'
import icon2 from '../../assets/icon/icon/icon2.svg'
import icon3 from '../../assets/icon/icon/icon3.svg'
import icon4 from '../../assets/icon/icon/icon4.svg'
import React from "react";
import "./style.css";


export const BlockCompanyValue = () => {
  return (
    <div>
      <div className="block-company-values">
        <img
          className="ellipse2-2"
          src={elipse2}
          alt="b-gradient"
        />
        <div className="company-values">
          <h4 className="title-company-values">Our company values culture</h4>
          <img
            className="pink-heart"
            src={embleme}
            alt="pink heart"
          />
          <p className="text-company-values">
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
        </div>
        <div className="block-icon-text">
          <div className="block-icon">
            <img className="icon1" src={icon1} alt="" />
            <span className="block-icon-span">Be Sincere</span>
          </div>
          <div className="block-icon">
            <img className="icon2" src={icon3} alt="" />
            <span className="block-icon-span">Keep it simple</span>
          </div>
          <div className="block-icon">
            <img className="icon3" src={icon2} alt="" />
            <span className="block-icon-span">Stronger together</span>
          </div>
          <div className="block-icon">
            <img className="icon4" src={icon4} alt="" />
            <span className="block-icon-span">Take intelligent risks</span>
          </div>
        </div>
        <img
          className="ellipse3-1"
          src={elipse3}
          alt="b-gradient"
        />
      </div>
    </div>
  );
};
