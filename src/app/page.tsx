import Image from "next/image";
import styles from "./page.module.css";
import FormForRecordings from "./_components/FormForRecordings";

export default function Home() {
  return (
    <main className={styles.main}>
      <FormForRecordings></FormForRecordings>
    </main>
  );
}
