"use client";
import { useEffect } from "react";
import styles from "./Restaurant.module.scss";
import Topbar2 from "@/components/topbar2/Topbar2";
import Map from "@/components/Map/Map";

export default function Menu() {
  useEffect(() => {
    document.body.style.backgroundColor = "#BC002D"; // Set your styles here
    return () => {
      document.body.style.backgroundColor = ""; // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <Topbar2 />
      <Map />
      <div className={styles.infos}>
        <div className={styles.info}>
          <h2 className={styles.h2}>Adress</h2>
          <p className={styles.p}>4690 Convoy St</p>
          <p className={styles.p}>San Diego CA</p>
        </div>
        <div className={styles.info}>
          <h2 className={styles.h2}>Hours</h2>
          <h3 className={styles.h3}>Weekdays</h3>
          <p className={styles.p}>4pm - 9:30pm</p>
          <h3 className={styles.h3}>Weekend</h3>
          <p className={styles.p}>5pm - 10pm</p>
        </div>
        <div className={styles.info}>
          <h2 className={styles.h2}>Contacts</h2>
          <p className={styles.p}>999-999-999</p>
          <p className={styles.p}>mail@mail.com</p>
        </div>
      </div>
    </>
  );
}
