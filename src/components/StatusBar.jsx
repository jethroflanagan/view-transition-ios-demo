import styles from './StatusBar.module.scss';
import statusBar from "../assets/status-bar.png";

export const StatusBar = () => (
  <div className={styles.statusBar}>
    <img src={statusBar} />
  </div>
)
