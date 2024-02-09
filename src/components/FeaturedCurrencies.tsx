import styles from "./FeaturedCurrencies.module.css";
import { useEffect, useState } from "react";
import { getFeaturedCurrencies } from "../api";
import { Card } from "../layouts/Card";

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
  const [currenciesData, setCureenciesData] = useState<CurrencyRate>();

  useEffect(() => {
    const fetchCurrencies = async () => {
      setCureenciesData(await getFeaturedCurrencies(base, symbols));
    };

    fetchCurrencies();
  }, [base, symbols]);

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
    <div>
      <h2 className={styles.heading}>{heading}</h2>
      <Card>
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
      </Card>
    </div>
  );
};
