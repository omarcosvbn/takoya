"use client";

import { useState } from "react";
import Image from "next/image";
import rawData from "../../data/fakeDB.json";
import { Item } from "../../data/types";
import styles from "./Menu.module.scss";
import Topbar from "@/components/topbar/Topbar";

const data = rawData as Item[];

export default function Menu() {
  // State to hold the selected filter type
  const [filter, setFilter] = useState<string>("all");

  // Filter items based on the selected filter
  const filteredItems: Item[] =
    filter === "all" ? data : data.filter((item: Item) => item.type === filter);

  return (
    <>
      <Topbar />
      <main className={styles.menu}>
        {/* Filter Buttons */}
        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("combos")}>Combos</button>
          <button onClick={() => setFilter("dishes")}>Dishes</button>
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
                alt={item.description}
                width={150}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
