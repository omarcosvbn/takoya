"use client";
import Topbar from "@/components/topbar/Topbar";
import styles from "./page.module.css";
import { motion, MotionProps, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // Generate random Y values for each steam image
  const randomYValues: number[] = Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * -30) - 10
  );

  // Type for animation settings, which will be applied to each image
  const getSteamAnimation = (randomY: number): MotionProps["animate"] => ({
    y: [0, randomY, 0],
    opacity: [1, 0.6, 1],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  });

  // Create a ref to the second div and use the useInView hook to detect its visibility
  const secondDivRef = useRef(null);
  const footerRef = useRef(null);

  const isInView1 = useInView(secondDivRef, { margin: "0px 0px -5% 0px" });
  const isInView2 = useInView(secondDivRef, { margin: "0px 0px -75% 0px" });
  const isFooterInView = useInView(footerRef, { margin: "0px 0px 0% 0px" });

  return (
    <>
      <main className={styles.main}>
        <motion.h2
          className={styles.about__circle}
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: isInView1 && !isFooterInView ? 1 : 0 }}
          transition={{ duration: 0.25 }} // Optional: smooth transition
        >
          About
        </motion.h2>

        <div className={styles.about}>
          <motion.p
            className={styles.about__text}
            initial={{ opacity: 0 }} // Start with opacity 0
            animate={{ opacity: isInView1 && !isFooterInView ? 1 : 0 }}
            transition={{ duration: 0.25 }} // Optional: smooth transition
          >
            At Takoya, we believe in using the freshest ingredients, sourced
            locally and imported from Japan, to create authentic flavors that
            transport you to the streets of Tokyo.
          </motion.p>
          <motion.p
            className={styles.about__text}
            initial={{ opacity: 0 }} // Start with opacity 0
            animate={{ opacity: isInView2 && !isFooterInView ? 1 : 0 }}
            transition={{ duration: 0.25 }} // Optional: smooth transition
          >
            Whether you’re joining us for a casual meal with friends, a romantic
            dinner, or a special celebration, our welcoming atmosphere and
            attentive service will make your visit unforgettable.
          </motion.p>
        </div>

        <span className={styles.takoyaki} />

        <motion.div
          className={styles.first}
          animate={{ opacity: isInView1 && !isFooterInView ? 0 : 1 }} // Change opacity based on visibility of second div
          transition={{ duration: 0.25 }} // Optional: smooth transition
        >
          <div className={styles.steamy}>
            <motion.img
              className={styles.steam1}
              src="/steam.svg"
              alt="Steam"
              animate={getSteamAnimation(randomYValues[0])}
            />
            <motion.img
              className={styles.steam2}
              src="/steam.svg"
              alt="Steam"
              animate={getSteamAnimation(randomYValues[1])}
            />
            <motion.img
              className={styles.steam3}
              src="/steam.svg"
              alt="Steam"
              animate={getSteamAnimation(randomYValues[2])}
            />
          </div>
        </motion.div>

        <motion.div className={styles.second} ref={secondDivRef}></motion.div>
      </main>
      <footer className={styles.footer} ref={footerRef}>
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
      </footer>
    </>
  );
}
