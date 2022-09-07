import styles from "./TaskInfo.module.css";

interface TaskInfo {
  created: number;
  done: number;
}

export function TaskInfo({created, done}: TaskInfo) {
  return (
    <div className={styles.taskInfo}>
      <p>Tarefas criadas <span>{created}</span></p>
      <p>Concluídas <span>{done}</span></p>
    </div>
  );
}