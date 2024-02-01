"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("rajiv");
  const apple = () => {
    setName("RAJIV");
  };
  return (
    <main className={styles.main}>
      <h1>Home Page {name}</h1>
      <div>
        <button onClick={() => apple()}>CLICK ME</button>
      </div>
    </main>
  );
}
