import React from 'react';
import './style.css'
import avatar from '../../assets/icon/avatar.svg'
import whiteDote from "../../assets/icon/white dote.svg"
 export const Explorer = () => {
    return (
        <div>
            <div className="left">
            <div className="title-subtitle">
              <h1 className="title"> Let’s Explore  Three-Dimensional visual</h1>
              <p className="subtitle">
                With virtual technology you can see the digital world feel more real
                and you can play the game with a new style.
              </p>
            </div>
            <div className="inform">
              <div className="text">
                <button className="btn-main">Get it Now</button>
                <a className="link" href="/">Explore Device</a>
              </div>
              <div className="people">
                <img className="avatar" src={avatar} alt="four people" />
                <img className="white-dote" src={whiteDote} alt="white dot" />
                <p className="subtitle-online">400k people online</p>
                <img className="ellipse-left" src="./assets/icon/ellipse-left.svg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
    );
}

