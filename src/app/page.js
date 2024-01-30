import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Raaazziv" />
      <User name="L" />
      <User name="S" />
      <User name="D" />
      {/* <User name="Raaazziv" /> */}
      <h1>Home Page</h1>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>My name is Rajiv aka {props.name}</h2>
    </div>
  );
};
