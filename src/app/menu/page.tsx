"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import rawData from "../../data/fakeDB.json";
import { Item } from "../../data/types";
import styles from "./Menu.module.scss";
import Topbar from "@/components/topbar/Topbar";

const data = rawData as Item[];

export default function Menu() {
  // State to hold the selected filter type, starting with no filter ("")
  const [filter, setFilter] = useState<string>("");

  // Filter items based on the selected filter; if filter is empty, show all items
  const filteredItems: Item[] =
    filter ? data.filter((item: Item) => item.type === filter) : data;

    useEffect(() => {
      document.body.style.backgroundColor = '#BC002D'; // Set your styles here
      return () => {
        document.body.style.backgroundColor = ''; // Cleanup on component unmount
      };
    }, []);

  return (
    <>
      <main className={styles.menu}>
        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          <Image
            src="/combos.webp"
            alt="Combos"
            width={150}
            height={150}
            onClick={() => setFilter("combos")}
            className={filter === "combos" ? styles.activeButton : styles.inactiveButton}
            style={{cursor: "pointer", width: "200px"}}
          />
          <Image
            src="/dishes.webp"
            alt="Dishes"
            width={150}
            height={150}
            onClick={() => setFilter("dishes")}
            className={filter === "dishes" ? styles.activeButton : styles.inactiveButton}
            style={{cursor: "pointer", width: "200px"}}
          />
        </div>

        {/* Display Filtered Items */}
        <div>
          {filteredItems.map((item: Item) => (
            <div
              key={item.id}
              className={styles.item}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                style={{ width: "200px", height: "auto" ,borderRadius: "10px"}}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
