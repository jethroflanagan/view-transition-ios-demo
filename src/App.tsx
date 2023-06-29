import styles from "./App.module.scss";
import { Phone } from "./components/Phone";
import dock from "./assets/dock.png";
import icons from "./assets/icons.png";
import statusBar from "./assets/status-bar.png";
import { Background } from "./components/Background";

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
      <div className={styles.dock}>
        <a href="/lock">
          <img src={dock} />
        </a>
      </div>
    </Phone>
  );
};
