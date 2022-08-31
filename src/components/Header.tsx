import styles from "./Header.module.css";

import taskListLogo from "../assets/task-list.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={taskListLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
