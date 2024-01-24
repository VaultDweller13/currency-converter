import { useEffect, useState } from "react";
import { CurrencyCard } from "./CurrencyCard";
import styles from "./CurrencyTable.module.css";
import { Container } from "../layouts/Container";
import { getCurrencies } from "../api";

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
  const [data, setData] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setData(await getCurrencies());
    };

    fetchCurrencies();
  }, []);

  const cards = data.map((currency) => (
    <CurrencyCard
      key={currency.id}
      name={currency.name}
      short_code={currency.short_code}
      symbol={currency.symbol}
    />
  ));

  return (
    <Container>
      <h2>List of supported currencies</h2>
      <section className={styles.container}>{cards}</section>
    </Container>
  );
};
