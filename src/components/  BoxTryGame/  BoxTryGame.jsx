import React from "react";
import "./style.css";
import fotoGirl from "../../assets/icon/foto girl.png";
import fotoMAn from "../../assets/icon/foto man.png";
export const BoxTryGame = () => {
  return (
    <div>
      <div className="box">
        <div className="box-foto">
          <img
            className="foto-girl-VR-mask"
            src={fotoGirl}
            alt="girl VR mask"
          />
          <img className="foto-man-VR-mask" src={fotoMAn} alt="man VR mask" />
        </div>
        <div className="box-text">
          <h4 className="box-title">New Experience In Playing Game</h4>
          <p className=" box-text-p">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <button className="btn">Get it Now</button>
        </div>
      </div>
    </div>
  );
};
