import { useEffect, useState } from "react";
import { FeaturedCurrencies } from "../components/FeaturedCurrencies";
import { Container } from "../layouts/Container";

type LocationData = {
  coutry_code: string;
};

export const Home = () => {
  const endpoint = "http://api.ipstack.com/check?";
  const access_key = import.meta.env.VITE_IP_API_KEY;
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch(
        endpoint + new URLSearchParams({ access_key })
      );

      if (!response.ok) {
        throw new Error("Request error");
      }

      const data = (await response.json()).country_code;
      setCountry(data);
    };

    fetchLocation();
  }, [access_key]);

  return (
    <Container>
      <h2>Home page</h2>
      <FeaturedCurrencies base={"RUB"} symbols="EUR,USD,JPY,CNY" />
      <FeaturedCurrencies
        base={"USD"}
        symbols="EUR,RUB,JPY,CNY"
        heading="USD cross-rates"
      />
    </Container>
  );
};
