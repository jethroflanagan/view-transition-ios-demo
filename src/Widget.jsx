import styles from "./Widget.module.scss";
import mountains from "./assets/widget-background.png";
import header from "./assets/widget-large.png";
import { AnimatedLink } from './components/AnimatedLink';
import { Phone } from "./components/Phone";

export const Widget = () => {
  return (
    <Phone>
      <div className={styles.widgetHeader}>
        <img src={header} />
        <AnimatedLink href="/">
          <img src={mountains} />
        </AnimatedLink>
      </div>
    </Phone>
  );
};
