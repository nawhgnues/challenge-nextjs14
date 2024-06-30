import styles from "../app/styles/billionaire-card.module.css";

interface Billionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string;
}

export default function BillionaireCard({ name, id, squareImage, netWorth, industries }: Billionaire) {
  return (
    <div className={styles.card} id={id}>
      <img src={squareImage} alt="Billionaire Profile Image" className={styles.squreImage} />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>
          {netWorth} Billion | {industries}
        </p>
      </div>
    </div>
  );
}
