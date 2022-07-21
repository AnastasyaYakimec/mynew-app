import React from 'react';
import './style.css'

export const HeaderCards = () => {
    return (
        <div>
          <div className="headerCards">
          <h3 className="headerCards-subtaitle">Mixed Reality Headsets</h3>
          <div className="border-vector-text">
          
            <select >
              <option  value="sortNew" >New First</option>
              <option value="sortOld">Old First</option>
            </select >
          </div>
        </div>   
        </div>
    );
}


