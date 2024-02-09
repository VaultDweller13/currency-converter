import styles from "./Card.module.css";

export const Card = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
