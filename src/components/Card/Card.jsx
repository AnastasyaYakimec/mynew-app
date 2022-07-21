import React from "react";
import "./style.css";

export const Card = ({ card , onClick}) => {
  return (
    <li className ="card" onClick={onClick}>
    <img className ="background-image" src={`./database/${card.cardImg}`} alt=""></img>
    <div className ="card-info">
      <p>id="{card.id}"</p>
      <h4 className ="card-subtaitle">{card.cardName}</h4>
      <p className ="card-text">{card.cardText} </p>
    </div>
    </li>
  );
};
















// export const Card = ({ rewiew , onClick}) => {

//   return (
//     <li  className="card" onClick={onClick}>
//       <img className="background-image" src={ database } alt=""></img>
//       <div className="card-info">
//         <p>id="{rewiew.id}"</p>
//         <h4 className="card-subtaitle">{rewiew.cardName}</h4>
//         <p className="card-text">{rewiew.cardText} </p>
//       </div>
//     </li>
//   );
// };

