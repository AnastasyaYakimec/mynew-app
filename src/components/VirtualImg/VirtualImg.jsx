import React from 'react';
import './style.css'
import girlV from '../../assets/icon/foto girl v vr.png'
import  elipseRight from '../../assets/icon/elipse-right.svg'

 export const VirtualImg = () => {
    return (
        <div className="right">
        <img className="girl-v-vr" src={girlV} alt="" />
        <img className="elipse-right" src={elipseRight} alt=""/>
      </div>
    );
}


