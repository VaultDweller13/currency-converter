import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
};
