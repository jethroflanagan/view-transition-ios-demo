import dock from "../assets/dock.png";
import styles from './Dock.module.scss';
import { AnimatedLink } from './AnimatedLink';

export const Dock = () => {

  return (
    <div className={styles.dock}>
      <AnimatedLink href="/lock">
        <img src={dock} />
      </AnimatedLink>
    </div>
  );
};
