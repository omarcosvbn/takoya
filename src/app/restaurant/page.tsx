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
    </>
  );
}
