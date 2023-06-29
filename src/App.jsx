import "./App.scss";
import { Phone } from "./components/Phone";
import icons from "./assets/icons.png";
import statusBar from "./assets/status-bar.png";
import { Background } from "./components/Background";
import { Dock } from "./components/Dock";

export const App = () => {
  return (
    <Phone>
      <Background />
      <div className="statusbar">
        <img src={statusBar} />
      </div>
      <div className="icons">
        <img src={icons} />
      </div>
      <Dock />
    </Phone>
  );
};
