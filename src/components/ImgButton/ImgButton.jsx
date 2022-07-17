import React from "react";
import photoButton from "../../assets/img/foto-button.svg";
import "./style.css";

export const ImgButton = () => {
  return (
    <div className="imgButton">
      <h3 className="imgButton-subtaitle">
        Awesome experiences with virtual reality world
      </h3>
      <img className="photo-button" src={photoButton} alt="photobutton" />
    </div>
  );
};
