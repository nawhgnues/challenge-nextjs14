import Link from "next/link";
import { API_URL } from "../constants";
import BillionaireCard from "../../components/billionaire-card";
import styles from "../styles/home.module.css";

// +캐싱 기능, +메타 데이터 사용가능, +클라이언트에서 API 요청 없음,
export const metadata = {
  title: "Home",
};

async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

interface Billionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string;
}

export default async function Tomato() {
  const billionaires = await getBillions();
  return (
    <ul className={styles.container}>
      {billionaires.map((billionaire: Billionaire) => (
        <li key={billionaire.id} className={styles.card}>
          <Link href={`/billionaire/${billionaire.id}`} className={styles.link}>
            <BillionaireCard
              id={billionaire.id}
              name={billionaire.name}
              squareImage={billionaire.squareImage}
              netWorth={billionaire.netWorth}
              industries={billionaire.industries}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
