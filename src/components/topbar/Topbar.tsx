import styles from "./Topbar.module.scss";

export default function Topbar() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src="/takoya.svg" alt="Takoya" />
      </header>
      <nav className={styles.nav}>
        <h1>Menu</h1>
        <h1>Restaurant</h1>
        <h1>Delivery</h1>
      </nav>
    </>
  );
}
