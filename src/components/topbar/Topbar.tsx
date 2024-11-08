import Link from "next/link";
import styles from "./Topbar.module.scss";

export default function Topbar() {
  return (
    <>
      <header className={styles.header}>
        <Link href="../"><img className={styles.logo} src="/takoya.svg" alt="Takoya" /></Link>
      </header>
      <nav className={styles.nav}>
        <Link href="../menu">Menu</Link>
        <Link href="../restaurant">Restaurant</Link>
        <Link href="../delivery">Delivery</Link>
      </nav>
    </>
  );
}
