"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router"; ye use nahi karna hai

const Login = () => {
  const router = useRouter();
  return (
    <div className="login">
      <h1>Login</h1>
      <br />
      <Link href="/">Home</Link>
      <br />
      <button onClick={() => router.push("/")}>Home</button>
      <br />
      <br />
      <br />
      <button onClick={() => router.push("about/aboutTeacher")}>
        About Teacher
      </button>
      <br />
      <button onClick={() => router.push("about/aboutStudent")}>
        About Student
      </button>
    </div>
  );
};
export default Login;
