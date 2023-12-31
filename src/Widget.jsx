import styles from "./Widget.module.scss";
import mountains from "./assets/widget-background.png";
import { AnimatedLink } from './components/AnimatedLink';
import { Phone } from "./components/Phone";
import { StatusBar } from './components/StatusBar';
import { WidgetLarge } from './components/WidgetLarge';

export const Widget = () => {
  return (
    <Phone>
      <div className={styles.statusContainer}>
        <StatusBar />
      </div>
      <div className={styles.widgetHeader}>
        <WidgetLarge />
        <div className={styles.mountains}>
          <AnimatedLink href="/">
            <img src={mountains} />
          </AnimatedLink>
        </div>
      </div>
    </Phone>
  );
};
