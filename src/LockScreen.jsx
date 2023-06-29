import styles from "./LockScreen.scss";
import actions from "./assets/lock-actions.png";
import clock from "./assets/lock-clock.png";
import statusBar from "./assets/status-bar.png";
import { Background } from "./components/Background";
import { Phone } from "./components/Phone";

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
