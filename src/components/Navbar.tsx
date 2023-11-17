import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.link}>
        Home
      </Link>
      <Link to={"currencies"} className={styles.link}>
        Currencies
      </Link>
    </nav>
  );
};
