import styles from "../index.module.css";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <a href="#" className="active">
        Home
      </a>
      <a href="#">News</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
    </div>
  );
}
