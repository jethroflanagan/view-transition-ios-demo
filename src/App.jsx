import styles from "./App.module.scss";
import icons from "./assets/icons.png";
import widget from "./assets/widget.png";
import { AnimatedLink } from './components/AnimatedLink';
import { Background } from "./components/Background";
import { Dock } from './components/Dock';
import { Phone } from "./components/Phone";
import { StatusBar } from './components/StatusBar';

export const App = () => {
  return (
    <Phone>
      <StatusBar />
      <Background />
      <div className={styles.home}>
        <AnimatedLink href="/widget">
          <img src={widget} className={styles.widgetIcon} />
        </AnimatedLink>
        <img src={icons} />
      </div>
      <Dock />
    </Phone>
  );
};
