import { useEffect, useRef, useState } from "react";
import styles from "./Converter.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { convertCurrencies } from "../api";
import { useDebouncedValue } from "../hooks";

type CurrencyCode = { short_code: string; id: number };

export const Converter = () => {
  const currencies = useRouteLoaderData("root") as CurrencyCode[];
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const debouncedFromAmount = useDebouncedValue(fromAmount, 400);
  const debouncedToAmount = useDebouncedValue(toAmount, 400);
  const changedField = useRef<"from" | "to" | null>();

  const options = currencies.map((currency) => (
    <option value={currency["short_code"]} key={currency.id}>
      {currency["short_code"]}
    </option>
  ));

  useEffect(() => {
    const fetchConvertation = async () => {
      if (changedField.current === "from") {
        const result = await convertCurrencies(
          fromCurrency,
          toCurrency,
          debouncedFromAmount
        );

        setToAmount(result ? result.toFixed(2) : "");
      }

      if (changedField.current === "to") {
        const result = await convertCurrencies(
          toCurrency,
          fromCurrency,
          debouncedToAmount
        );
        setFromAmount(result ? result.toFixed(2) : "");
      }
    };

    fetchConvertation();
  }, [debouncedFromAmount, debouncedToAmount, fromCurrency, toCurrency]);

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
              onChange={(e) => {
                changedField.current = "from";
                setFromAmount(e.target.value);
              }}
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
              value={toAmount}
              onChange={(e) => {
                changedField.current = "to";
                setToAmount(e.target.value);
              }}
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
