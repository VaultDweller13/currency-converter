import styles from "./FeaturedCurrencies.module.css";

type Props = {
  base: string;
  rates: Record<string, number> | undefined;
};

export const FeaturedCurrencies = ({ base, rates }: Props) => {
  const pairs = rates
    ? Object.entries(rates).map((pair, index) => {
        const currency = pair[0];
        const rate = pair[1];

        return (
          <span
            key={index}
            className={styles.card}
          >{`1 ${base} equals ${rate} ${currency}`}</span>
        );
      })
    : "Loading...";

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Featured currencies</h2>
      <div className={styles.container}>{pairs}</div>
    </section>
  );
};
