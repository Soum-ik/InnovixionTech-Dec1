import Navbar from "./components/Header";
import styles from "./style/style";
import Todo from "./components/Todo";

export default function App() {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Todo />
        </div>
      </div>
    </>
  );
}
