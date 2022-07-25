import React, { useState } from "react";
import Group34 from "../../assets/img/Group34.svg";
import "./style.css";

export const AddingCard = () => {
  const [cardImageNumber, setCardImageNumber] = useState();
  const [inputCardImgName, setInputCardImgName] = useState();
  const [inputCardText, setInputCardText] = useState();
  const [Card, setCard] = useState([]);
  const  addNewData= (e)=> {
    e.preventDefault();
   const userCard = {
      cardImg: cardImageNumber,
      cardName: inputCardImgName,
      cardText: inputCardText,
      cardDataTime: Date.now(),
    };
    setCard([...Card , userCard])
    console.log(Card)
    setCardImageNumber('')
    setInputCardImgName('')
    setInputCardText('')
  }

  return (
    <div className="adding-card">
      <img className="img-group" src={Group34} alt=""></img>
      <h1 className="adding-card_title">Add new card</h1>
      <form className="adding-card-form" action="#">
        <input
          className="adding-card-form_input"
          type="text"
          value={cardImageNumber}
          onChange={(e) => setCardImageNumber( e.target.value )}
          placeholder=" Card image number"
        />
        <input
          className="adding-card-form_input"
          type="text"
          value={inputCardImgName}
          onChange={(e) =>
            setInputCardImgName( e.target.value)
          }
          placeholder="Card name"
        />

        <input
          className="adding-card-form_input"
          type="text"
          value={inputCardText}
          onChange={(e) =>
            setInputCardText(e.target.value )
          }
          placeholder="Card description"
        />
        <button onClick={addNewData} className="btn">
          Add
        </button>
      </form>
    </div>
  );
};
