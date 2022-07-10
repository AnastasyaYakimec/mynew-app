import React from "react";
import fotoButton from "../../assets/img/foto-button.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box1">
      <h3 className="box1-subtaitle">
        Awesome experiences with virtual reality world
      </h3>
      <img className="foto-button" src={fotoButton} alt="foto button" />
    </div>
  );
};
