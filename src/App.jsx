import styles from "./App.module.scss";
import icons from "./assets/icons.png";
import statusBar from "./assets/status-bar.png";
import { Background } from "./components/Background";
import { Dock } from './components/Dock';
import { Phone } from "./components/Phone";

export const App = () => {
  return (
    <Phone>
      <Background />
      <div className={styles.statusBar}>
        <img src={statusBar} />
      </div>
      <div className={styles.icons}>
        <img src={icons} />
      </div>
      <Dock />
    </Phone>
  );
};
