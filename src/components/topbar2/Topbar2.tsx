import { useState } from "react";
import Link from "next/link";
import styles from "./Topbar2.module.scss";

export default function Topbar2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="../">
          <img className={styles.logo} src="/takoya2.svg" alt="Takoya" />
        </Link>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </header>
      {/* Overlay div */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.visible : ""}`}
        onClick={() => setMenuOpen(false)} // Close menu when overlay is clicked
      ></div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.visible : ""}`}
        onClick={() => setMenuOpen(false)} // Close menu when overlay is clicked
      >
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link href="../menu" onClick={() => setMenuOpen(false)}>
          Menu
        </Link>
        <Link href="../restaurant" onClick={() => setMenuOpen(false)}>
          Restaurant
        </Link>
        <Link href="../delivery" onClick={() => setMenuOpen(false)}>
          Delivery
        </Link>
      </nav>
    </>
  );
}
