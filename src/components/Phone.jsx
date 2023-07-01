import styles from "./Phone.module.scss";
export const Phone = ({ children }) => {
  return <div className={styles.phone}>
    {children}
  </div>;
};
