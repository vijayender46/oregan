import styles from "./page.module.css";
import Login from "./pages/login/page";

export default function Home() {
  return (
    <main className={styles.main}>
     <Login />
    </main>
  );
}
