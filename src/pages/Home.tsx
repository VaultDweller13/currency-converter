import { FeaturedCurrencies } from "../components/FeaturedCurrencies";
import { Converter } from "../components/Converter";
import { Container } from "../layouts/Container";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <Container>
      <h2>Home page</h2>
      <div className={styles.grid}>
        <Converter />
        <div className={styles.featured}>
          <FeaturedCurrencies base={"RUB"} symbols="EUR,USD,JPY,CNY" />
          <FeaturedCurrencies
            base={"USD"}
            symbols="EUR,RUB,JPY,CNY"
            heading="USD cross-rates"
          />
        </div>
      </div>
    </Container>
  );
};
