"use client";
import Link from "next/link";
// import { useRouter } from "next/router"; ye use nahi karna hai
import { useRouter } from "next/navigation";
import Home from "../page";

const Login = () => {
  const router = useRouter();
  return (
    <div className="login">
      <h1>Login</h1>
      <br />
      <Link href="/">Home</Link>
      <br />
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};
export default Login;
