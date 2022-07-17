import React from "react";
import database from "../../assets/database/1.webp";
import './style.css'


export const Card = ( props ) => {
  const {rewiew} = props
  
  console.log(database
    )
  return (
    <li className="card">
   <img className="background-image" src={database} alt="" ></img>
   <p>id="{rewiew.id}"</p> 
   <div className="card-info" >
                  <h4 className="card-subtaitle">{rewiew.cardName}</h4>
    <p className="card-text">{rewiew.cardText} </p>
                </div>
              </li>
             
  );
};

// {/* <li>
  
//   <img src={database} alt=''/>
//   <p></p>
//   <p>{rewiew.cardName}</p>
//   <p>{rewiew.cardText}</p>
//   <p>{rewiew.id}</p>
// </li> */}
               