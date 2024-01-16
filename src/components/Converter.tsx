import styles from "./Converter.module.css";

export const Converter = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h3>Convert currency</h3>
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
            <option value="RUB">RUB</option>
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
            <option value="USD">USD</option>
          </select>
        </div>
      </form>
    </div>
  );
};
