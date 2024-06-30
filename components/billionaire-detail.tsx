import { API_URL } from "../app/constants";
import styles from "../app/styles/billionaire-detail.module.css";

interface BillionaireDetail {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  industries: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export async function getBillion(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillionaireDetail({ id }: { id: string }) {
  const billion: BillionaireDetail = await getBillion(id);
  return (
    <div>
      <img src={billion.squareImage} alt="Billionaire Thumbnail" className={styles.detail__img} />
      <h1 className={styles.name}>{billion.name}</h1>
      <div className={styles.bio__container}>
        {billion.bio.map((bio) => {
          return <p>{bio}</p>;
        })}
      </div>
    </div>
  );
}
