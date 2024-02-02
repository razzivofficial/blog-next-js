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
      <h1>Home Page {name}</h1>
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
    </main>
  );
}
