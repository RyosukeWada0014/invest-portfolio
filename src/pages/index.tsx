import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/piechart">
        <a>pieChart</a>
      </Link>
      <Link href="/barchart">
        <a>barChart</a>
      </Link>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
