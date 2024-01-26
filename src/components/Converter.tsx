import styles from "./Converter.module.css";
import { useRouteLoaderData } from "react-router-dom";

type CurrencyCode = { short_code: string; id: number };

export const Converter = () => {
  const currencies = useRouteLoaderData("root") as CurrencyCode[];

  const options = currencies.map((currency) => (
    <option value={currency["short_code"]} key={currency.id}>
      {currency["short_code"]}
    </option>
  ));

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
              className={styles.input}
            />
          </label>
          <select
            name="fromCurrency"
            id="fromCurrency"
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
              className={styles.input}
            />
          </label>
          <select name="toCurrency" id="toCurrency" className={styles.input}>
            {options}
          </select>
        </div>
      </form>
    </div>
  );
};
