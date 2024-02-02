"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"; nahi use karna hai


const About = () => {
  const router = useRouter();
  return (
    <div className="container">
      <h1>About Us</h1>
      <br />
      <Link href="/">Home</Link>
      <br />
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};
export default About;
