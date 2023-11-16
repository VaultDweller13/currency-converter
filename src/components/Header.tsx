import { Navbar } from "./Navbar";
import styles from "./Header.module.css";
import { Container } from "../layouts/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flex}>
          <h1>Currency converter</h1>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
