import Navbar from "./components/Header";
import styles from "./style/style";

export default function App() {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  );
}
