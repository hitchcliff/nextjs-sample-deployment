import styles from "../styles/Home.module.css";
import Head from "next/head";

const about = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">About!</a>
        </h1>
        <p>Sample description</p>
      </main>
    </>
  );
};

export default about;
