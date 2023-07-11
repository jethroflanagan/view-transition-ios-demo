import styles from './WidgetSmall.module.scss';
import background from "../assets/widget/background.png";
import section from "../assets/widget/section.png";
import title from "../assets/widget/title.png";
import subtitle from "../assets/widget/subtitle.png";
import icon from "../assets/widget/icon.png";

export const WidgetSmall = () => (
  <div className={styles.widgetSmall}>
    <img src={background} className={styles.background} />
    <img src={section} className={styles.section} />
    <div className={styles.container}>
      <img src={title} className={styles.title} />
      <img src={subtitle} className={styles.subtitle} />
      <img src={icon} className={styles.icon} />
      <div className={styles.mountains} />
    </div>
  </div>
);
