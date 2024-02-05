import Link from "next/link";
import "./about.css";

export default function Layout({ children }) {
  return (
    <>
      <h4>Navbar</h4>
      <ul className="about-menu">
        <li>
          <Link href="/about">Abt Page</Link>
        </li>
        <li>
          <Link href="aboutStudent">Abt Std</Link>
        </li>
        <li>
          <Link href="aboutTeacher">Abt Teach</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
