import React from 'react';
import Group34 from "../../assets/img/Group34.svg"
import './style.css'


 export const AddingCard = () => {
    return (
        <div className='adding-card'>
        <img className='img-group'src={Group34} alt=""></img>
        <h1 className='adding-card_title'>Add new card</h1>
        <form className='adding-card-form' action="#">
            <input className='adding-card-form_input' type="text" name="card name" placeholder="Card name"/>
            <input className='adding-card-form_input' type="text" name="card description" placeholder="Card description"/>
            <input className='adding-card-form_input'type="text" name="card image name" placeholder="Card image name"/>
            <button className='btn'>Add</button>
        </form>
        </div>
  )
}


