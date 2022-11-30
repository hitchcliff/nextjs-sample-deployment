import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Nav;
