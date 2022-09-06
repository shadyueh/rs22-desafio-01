import styles from "./TaskInfo.module.css";

export function TaskInfo() {
  return (
    <div className={styles.taskInfo}>
      <p>Tarefas Criadas <span>0</span></p>
      <p>Concluídas <span>0</span></p>
    </div>
  );
}