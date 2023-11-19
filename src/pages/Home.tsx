import { useEffect, useState } from "react";
import { FeaturedCurrencies } from "../components/FeaturedCurrencies";
import { Container } from "../layouts/Container";

export const Home = () => {
  const endpoint = "http://ip-api.com/json/?";
  const fields = "currency";
  const [base, setBase] = useState("RUB");

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch(endpoint + new URLSearchParams({ fields }));

      if (!response.ok) {
        throw new Error("Request error");
      }

      const data = (await response.json()).currency;

      setBase(data);
    };

    fetchLocation();
  }, []);

  return (
    <Container>
      <h2>Home page</h2>
      <FeaturedCurrencies base={base} symbols="EUR,USD,JPY,CNY" />
      <FeaturedCurrencies
        base={"USD"}
        symbols="EUR,RUB,JPY,CNY"
        heading="USD cross-rates"
      />
    </Container>
  );
};
