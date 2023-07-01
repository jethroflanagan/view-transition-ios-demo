import { useNavigate } from 'react-router-dom';
import styles from './AnimatedLink.module.scss';

export const AnimatedLink = ({ href, children }) => {
  const navigate = useNavigate();

  const viewNavigate = () => {
    return document.startViewTransition(() => {
      navigate(href);
    });
  }

  return (
    <button className={styles.animatedLink} onClick={viewNavigate}>
      {children}
    </button>
  );
};
