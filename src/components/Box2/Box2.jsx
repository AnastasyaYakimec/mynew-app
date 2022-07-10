import React from 'react';
import './style.css'

export const Box2 = () => {
    return (
        <div>
          <div className="box2">
          <h3 className="box2-subtaitle">Mixed Reality Headsets</h3>
          <div className="border-vector-text">
          
            <select id="sort">
              <option value="sortNew" selected>New First</option>
              <option value="sortOld">Old First</option>
            </select >
          </div>
        </div>   
        </div>
    );
}


