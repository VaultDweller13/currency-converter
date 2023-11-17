import styles from "./Container.module.css";

export const Container = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
