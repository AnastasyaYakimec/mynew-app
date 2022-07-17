import React from 'react';
import girlV from '../../assets/icon/foto girl v vr.png'
import  elipseRight from '../../assets/icon/elipse-right.svg'
import './style.css'

 export const VirtualImg = () => {
    return (
        <div className="virtualimg">
        <img className="girl-v-vr" src={girlV} alt="" />
        <img className="elipse-right" src={elipseRight} alt=""/>
      </div>
    );
}


