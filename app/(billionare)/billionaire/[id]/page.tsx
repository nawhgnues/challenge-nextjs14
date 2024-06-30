import { Suspense } from "react";
import BillionaireDetail from "../../../../components/billionaire-detail";
import styles from "../../../styles/billionaire-detail.module.css";

export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
  return {
    title: {
      template: "%s | Next Metadata Test",
      default: id.replaceAll("-", " ").toUpperCase(),
    },
    description: `${id.replaceAll("-", " ").toUpperCase()} detail page`,
  };
}

export default async function Movie({ params: { id } }: { params: { id: string } }) {
  return (
    <div className={styles.detail__container}>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <BillionaireDetail id={id} />
      </Suspense>
    </div>
  );
}
