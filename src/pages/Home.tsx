import { FeaturedCurrencies } from "../components/FeaturedCurrencies";
import { Converter } from "../components/Converter";
import { Container } from "../layouts/Container";

export const Home = () => {
  return (
    <Container>
      <h2>Home page</h2>
      <FeaturedCurrencies base={"RUB"} symbols="EUR,USD,JPY,CNY" />
      <FeaturedCurrencies
        base={"USD"}
        symbols="EUR,RUB,JPY,CNY"
        heading="USD cross-rates"
      />
      <Converter />
    </Container>
  );
};
