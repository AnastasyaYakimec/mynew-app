import React, { useState } from "react";
import Group34 from "../../assets/img/Group34.svg";
import "./style.css";

export const AddingCard = ({ onClick, closeAddCards }) => {
  const [cardImageNumber, setCardImageNumber] = useState("");
  const [inputCardImgName, setInputCardImgName] = useState("");
  const [inputCardText, setInputCardText] = useState("");
  

  const handlerCardImageNumber = (e) => {
    setCardImageNumber(e.target.value);
  };
  const handsInputCardImgName = (e) => {
    setInputCardImgName(e.target.value);
  };
  const handlerInputCardText = (e) => {
    setInputCardText(e.target.value);
  };

  const clearInput = () => {
    setCardImageNumber("");
    setInputCardImgName("");
    setInputCardText("");
  };
  const card = JSON.parse(localStorage.getItem("cards") || "[]");

  const addNewData = (e) => {
    e.preventDefault();
    const userCard = {
      id: card.length,
      cardImg: `${cardImageNumber}.webp`,
      cardName: inputCardImgName,
      cardText: inputCardText,
      cardDataTime: Date.now(),
    };
    card.push(userCard);
    localStorage.setItem("cards", JSON.stringify(card));

    console.log(card);
    clearInput();
    closeAddCards(e)
  };

  return (
    <div className="adding-card">
      <img className="img-group" src={Group34} alt=""></img>
      <h1 className="adding-card_title">Add new card</h1>
      <form className="adding-card-form" action="#">
        <input
          className="adding-card-form_input"
          type="text"
          value={cardImageNumber}
          placeholder=" Card image number"
          onChange={handlerCardImageNumber}
        />
        <input
          className="adding-card-form_input"
          type="text"
          value={inputCardImgName}
          placeholder="Card name"
          onChange={handsInputCardImgName}
        />

        <input
          className="adding-card-form_input"
          type="text"
          value={inputCardText}
          placeholder="Card description"
          onChange={handlerInputCardText}
        />
        <button
          type="submit"
          className="btn"
          // onClick={(e) => onClick(e,{ cardImageNumber, inputCardImgName, inputCardText })
          // }
          onClick={addNewData }
        >
          Add
        </button>
        <button className="close" onClick={closeAddCards}>
          &times;
        </button>
      </form>
    </div>
  );
};
