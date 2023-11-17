import styles from "./CurencyCard.module.css";

type CardProps = {
  name: string;
  short_code: string;
  symbol: string;
};

export const CurrencyCard = ({ name, short_code, symbol }: CardProps) => {
  return (
    <div className={styles.card}>
      <h4>{name}</h4>
      <p>{`${short_code}, ${symbol}`}</p>
    </div>
  );
};
