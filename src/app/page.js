"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Login from "./login/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("rajiv");

  const apple = () => {
    setName("RAJIV");
  };

  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    <main>
      <h1>Dynamic Routing by {name}</h1>
      {/* <div>
        <button onClick={() => apple()}>CLICK ME</button>
      </div> */}
      {/* <Link href={Login}>Login Page1</Link> */}
      <Link href="/login">Login Page</Link>
      <br />
      <br />
      <Link href="/about">About Us</Link>
      <br />
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Login Button</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>About Button</button>
      <br />
      <br />
      <button
        type="button"
        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Pink to Orange
      </button>
    </main>
  );
}
