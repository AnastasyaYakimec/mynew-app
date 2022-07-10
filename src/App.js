import { Header } from "./components/Header/Header.jsx";
import "./App.css";
import "./assets/reset.css";
import { Explorer } from "./components/Explorer/Explorer.jsx";
import { VirtualImg } from "./components/VirtualImg/VirtualImg.jsx";
import { BoxTryGame } from "./components/  BoxTryGame/  BoxTryGame.jsx";
import { Box } from "./components/Box/Box.jsx";
import { Box2 } from "./components/Box2/Box2.jsx";
import { Cards } from "./components/Cards/Cards.jsx";
import { CardReviews } from "./components/CardReviews/CardReviews.jsx";
import { BlockCompanyVlue } from "./components/BlockCompanyValue/BlockCompanyVlue.jsx";
import {Footer} from "./components/Footer/Footer.jsx"
export const App = () => {
  return (
    <div className="bcgg">
      <Header />
      <div className="centr">
        <Explorer />
        <VirtualImg />
      </div>
      <BoxTryGame />
      <Box />
      <Box2 />
      <Cards />
      <CardReviews />
      <BlockCompanyVlue />
   <Footer/>
    </div>
  );
};
export default App;
