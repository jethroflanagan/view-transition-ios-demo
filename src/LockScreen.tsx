import wallpaper from "./assets/wallpaper.png";
import clock from "./assets/lock-clock.png";
import actions from "./assets/lock-actions.png";
import statusBar from "./assets/status-bar.png";
import styles from "./LockScreen.module.scss";
import { Phone } from "./components/Phone";
import { Background } from "./components/Background";

export const LockScreen = () => {
  return (
    <Phone>
      <Background />
      <div className={styles.statusBar}>
        <img src={statusBar} />
      </div>
      <div className={styles.clock}>
        <img src={clock} />
      </div>
      <div className={styles.actions}>
        <img src={actions} />
      </div>
    </Phone>
  );
};
