import { useEffect, useState } from "react";
import styles from "./Converter.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { convertCurrencies } from "../api";

type CurrencyCode = { short_code: string; id: number };

export const Converter = () => {
  const currencies = useRouteLoaderData("root") as CurrencyCode[];
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [fromAmount, setFromAmount] = useState("");
  const [ToAmount, setToAmount] = useState("");

  const options = currencies.map((currency) => (
    <option value={currency["short_code"]} key={currency.id}>
      {currency["short_code"]}
    </option>
  ));

  useEffect(() => {
    const fetchConvertation = async () => {
      const result = await convertCurrencies(
        fromCurrency,
        toCurrency,
        fromAmount
      );

      setToAmount(result ? result.toFixed(2) : "");
    };

    fetchConvertation();
  }, [fromAmount, fromCurrency, toCurrency]);

  return (
    <div className={styles.container}>
      <h2>Convert currency</h2>
      <form action="" className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>
            From
            <input
              type="number"
              id="fromAmount"
              name="fromAmount"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className={styles.input}
            />
          </label>
          <select
            name="fromCurrency"
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className={styles.input}
          >
            {options}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            To
            <input
              type="number"
              id="toAmount"
              name="toAmount"
              value={ToAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className={styles.input}
            />
          </label>
          <select
            name="toCurrency"
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className={styles.input}
          >
            {options}
          </select>
        </div>
      </form>
    </div>
  );
};
