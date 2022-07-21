import { Header } from "./components/Header/Header.jsx";
// import { Button } from "./components/Button/Button.jsx";
import { Explorer } from "./components/Explorer/Explorer.jsx";
import { VirtualImg } from "./components/VirtualImg/VirtualImg.jsx";
import { TryGame } from "./components/TryGame/TryGame.jsx";
import { ImgButton } from "./components/ImgButton/ImgButton.jsx";
import { HeaderCards } from "./components/HeaderCards/HeaderCards.jsx";
import { Cards } from "./components/Cards/Cards.jsx";
import { CardReviews } from "./components/CardReviews/CardReviews.jsx";
import { BlockCompanyValue } from "./components/BlockCompanyValue/BlockCompanyValue.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";
import "./assets/reset.css";


export const App = () => {
  return (
    <div className="container">
      <Header />
    
      {/* <Dialog /> */}
      {/* <Button /> */}
      <div className="hero">
        <Explorer />
        <VirtualImg />
      </div>
      <TryGame />
      <ImgButton />
      <HeaderCards />
      <Cards />
      <CardReviews />
      <BlockCompanyValue />
      <Footer />
    </div>
  );
};




// import React,  {useState} from "react";
// import {Dialog} from "./components/Dialog/Dialog.jsx";
// import  './App.css'

//  export const App = () => {
//   const [dialogActive, setDialogActive] = useState(true)
// return (
//   <div className="app">
//     <main>
// <button className="open-btn" onClick={() => setDialogActive(true) }> open </button>
// <p>Lorem gfghghg</p>
// <p>fiufeuifjifejj</p>
//     </main>
//     <Dialog active={dialogActive} setActive={setDialogActive}/>
//   </div>
// )


// }