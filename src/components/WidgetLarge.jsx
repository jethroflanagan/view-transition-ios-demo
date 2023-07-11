import styles from './WidgetLarge.module.scss';
import background from "../assets/widget/background2.png";
import section from "../assets/widget/section2.png";
import title from "../assets/widget/title2.png";
import subtitle from "../assets/widget/subtitle2.png";
import icon from "../assets/widget/icon2.png";

export const WidgetLarge = () => (
  <div className={styles.widgetLarge}>
    <img src={background} className={styles.background} />
    <img src={section} className={styles.section} />
    <img src={title} className={styles.title} />
    <img src={subtitle} className={styles.subtitle} />
    <img src={icon} className={styles.icon} />
  </div>
);
