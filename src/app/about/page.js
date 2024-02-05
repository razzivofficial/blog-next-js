"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"; nahi use karna hai

const About = () => {
  const router = useRouter();
  return (
    <div className="container">
      <h1 className="heading">About Us</h1>
      <br />
      <Link href="/">Home</Link>
      <br />
      <button onClick={() => router.push("/")}>Home</button>
      <br />
      <br />
      <br />
      <button onClick={() => router.push("about/aboutStudent")}>
        About Student
      </button>
      <br />
      <button onClick={() => router.push("about/aboutTeacher")}>
        About Teacher
      </button>
    </div>
  );
};
export default About;
