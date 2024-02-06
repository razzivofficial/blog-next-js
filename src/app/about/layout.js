"use client";
import Link from "next/link";
import "./about.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      <h4>Navbar</h4>
      <div>
        {pathName !== "/about/aboutTeacher" ? (
          <ul className="about-menu">
            <li>
              <Link href="/about">Abt Page</Link>
            </li>
            <li>
              <Link href="/about/aboutStudent">Abt Std</Link>
            </li>
            <li>
              <Link href="/about/aboutTeacher">Abt Teach</Link>
            </li>
          </ul>
        ) : (
          <div>
            <Link href="/">Home</Link>
            <h1>This is conditional layout</h1>
          </div>
        )}
      </div>
      {children}
    </>
  );
}
