import { useEffect, useState } from "react";
import { CurrencyCard } from "./CurrencyCard";
import styles from "./CurrencyTable.module.css";

type Currency = {
  id: number;
  name: string;
  short_code: string;
  code: string;
  precision: number;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  decimal_mark: string;
  thousands_separator: string;
};

export const CurrencyTable = () => {
  const endpoint = "https://api.currencybeacon.com/v1/currencies?";
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(
        endpoint + new URLSearchParams({ type: "fiat", api_key: apiKey })
      );

      if (!response.ok) {
        throw new Error("Request error");
      }

      const dataObject = await response.json();

      setData(dataObject.response);
    };

    fetchCurrencies();
  }, [apiKey]);

  const cards = data.map((currency) => (
    <CurrencyCard
      key={currency.id}
      name={currency.name}
      short_code={currency.short_code}
      symbol={currency.symbol}
    />
  ));

  return (
    <>
      <h2>List of supported currencies</h2>
      <section className={styles.container}>{cards}</section>
    </>
  );
};
