import styles from "./Background.module.scss";
import wallpaper from "../assets/wallpaper.png";

export const Background = ({ blur }) => (
  <div className={styles.background}>
    <img src={wallpaper} className={`${blur && styles.wallpaperBlur}`} />
  </div>
);
