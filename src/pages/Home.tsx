import { useEffect, useState } from "react";
import { FeaturedCurrencies } from "../components/FeaturedCurrencies";
import { Container } from "../layouts/Container";

type CurrencyRate = Record<string, number>;

export const Home = () => {
  const endpoint = "https://api.currencybeacon.com/v1/latest?";
  const base = "RUB";
  const api_key = import.meta.env.VITE_API_KEY;
  const symbols = "EUR,USD,JPY,CNY";

  const [currenciesData, setCureenciesData] = useState<CurrencyRate>();

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(
        endpoint +
          new URLSearchParams({
            base,
            symbols,
            api_key,
          })
      );

      if (!response.ok) {
        throw new Error("Request error");
      }

      setCureenciesData((await response.json()).rates);
    };

    fetchCurrencies();
  }, [api_key]);

  return (
    <Container>
      <h2>Home page</h2>
      <FeaturedCurrencies base={base} rates={currenciesData} />
    </Container>
  );
};
