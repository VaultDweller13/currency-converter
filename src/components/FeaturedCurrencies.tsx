import styles from "./FeaturedCurrencies.module.css";
import { useEffect, useState } from "react";

type Props = {
  heading?: string;
  symbols: string;
  base: string;
};

type CurrencyRate = Record<string, number>;

export const FeaturedCurrencies = ({
  heading = "Featured currencies",
  symbols,
  base,
}: Props) => {
  const endpoint = "https://api.currencybeacon.com/v1/latest?";
  const api_key = import.meta.env.VITE_API_KEY;

  const [currenciesData, setCurrenciesData] = useState<CurrencyRate>();

  useEffect(() => {
    let ignore = false;

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

      if (!ignore) {
        setCurrenciesData((await response.json()).rates);
      }
    };

    fetchCurrencies();

    return () => {
      ignore = true;
    };
  }, [base, symbols, api_key]);

  const tableHeader = currenciesData ? (
    Object.keys(currenciesData).map((currency, index) => (
      <th key={index} className={styles.tableDivider}>
        {currency}
      </th>
    ))
  ) : (
    <th> "N/A"</th>
  );

  const tableData = currenciesData ? (
    Object.values(currenciesData).map((rate, index) => (
      <td key={index} className={styles.tableData}>
        {rate.toFixed(2)}
      </td>
    ))
  ) : (
    <td>"N/A"</td>
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableDivider}></th>
              {tableHeader}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={styles.tableData}>{base}</th>
              {tableData}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
