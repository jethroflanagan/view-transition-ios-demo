import styles from "./Phone.module.scss";
import { ReactNode } from "react";
export const Phone = ({ children }: { children: ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};
