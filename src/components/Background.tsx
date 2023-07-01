import styles from "./Background.module.scss";
import wallpaper from "../assets/wallpaper.png";

export const Background = () => (
  <div className={styles.background}>
    <img src={wallpaper} />
  </div>
);
