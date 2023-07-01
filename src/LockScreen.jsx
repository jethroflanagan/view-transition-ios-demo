import styles from "./LockScreen.module.scss";
import actions from "./assets/lock-actions.png";
import clock from "./assets/lock-clock.png";
import { AnimatedLink } from './components/AnimatedLink';
import { Background } from "./components/Background";
import { Phone } from "./components/Phone";
import { StatusBar } from './components/StatusBar';

export const LockScreen = () => {
  return (
    <Phone >
      <StatusBar />
      <Background blur />
      <div className={styles.lock}>
        <div className={styles.clock}>
          <img src={clock} />
        </div>
        <AnimatedLink href="/">
          <div className={styles.actions}>
            <img src={actions} />
          </div>
        </AnimatedLink>
      </div>
    </Phone>
  );
};
