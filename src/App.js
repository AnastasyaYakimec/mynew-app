import { Header } from "./components/Header/Header.jsx";
import { Explorer } from "./components/Explorer/Explorer.jsx";
import { VirtualImg } from "./components/VirtualImg/VirtualImg.jsx";
import { TryGame } from "./components/TryGame/TryGame.jsx";
import { ImgButton } from "./components/ImgButton/ImgButton.jsx";
import { HeaderCards } from "./components/HeaderCards/HeaderCards.jsx";
import { Cards } from "./components/Cards/Cards.jsx";
import { CardReviews } from "./components/CardReviews/CardReviews.jsx";
import { BlockCompanyValue } from "./components/BlockCompanyValue/BlockCompanyValue.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import Example from "./components/Video/Video.jsx";
import "./App.css";
import "./assets/reset.css";


export const App = () => {
  const cards = JSON.parse(localStorage.getItem("cards" ) || "[]")
  return (
    <div className="container">
      <Header  />
      <div className="hero">
        <Explorer />
        <VirtualImg />
      </div>
      <TryGame />
      <ImgButton />
      <HeaderCards />
      <Cards cards={cards}/>
      <CardReviews />
      <BlockCompanyValue />
      <Footer />
      {/* <Example /> */}
    </div>
  );
};
