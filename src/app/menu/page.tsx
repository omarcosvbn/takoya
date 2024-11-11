"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import rawData from "../../data/fakeDB.json";
import { Item } from "../../data/types";
import styles from "./Menu.module.scss";
import Topbar2 from "@/components/topbar2/Topbar2";
import { motion } from "framer-motion";

const data = rawData as Item[];

export default function Menu() {
  // State to hold the selected filter type, starting with no filter ("")
  const [filter, setFilter] = useState<string>("");

  // Filter items based on the selected filter; if filter is empty, show all items
  const filteredItems: Item[] = filter
    ? data.filter((item: Item) => item.type === filter)
    : data;

  useEffect(() => {
    document.body.style.backgroundColor = "#BC002D"; // Set your styles here
    return () => {
      document.body.style.backgroundColor = ""; // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <Topbar2 />
      <main className={styles.menu}>
        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          <motion.div
            className={
              filter === "combos" ? styles.activeButton : styles.inactiveButton
            }
          >
            <Image
              src="/combos.webp"
              alt="Combos"
              width={150}
              height={150}
              onClick={() => setFilter("combos")}
              className={styles.filter}
              style={{ cursor: "pointer", width: "200px" }}
            />
          </motion.div>
          <motion.div
            className={
              filter === "dishes" ? styles.activeButton : styles.inactiveButton
            }
          >
            <Image
              src="/dishes.webp"
              alt="Dishes"
              width={150}
              height={150}
              onClick={() => setFilter("dishes")}
              className={styles.filter}
              style={{ cursor: "pointer", width: "200px" }}
            />
          </motion.div>
        </div>

        {/* Display Filtered Items */}
        <div className={styles.itens}>
          {filteredItems.map((item: Item) => (
            <motion.div
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                style={{ width: "200px", height: "auto", borderRadius: "10px" }}
              />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
