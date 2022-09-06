import styles from "./TaskList.module.css";
import clipboard from "../assets/clipboard.png";

export function TaskList() {
  return (
    <div className={styles.noTasks}>
      <img src={clipboard} alt="sem tarefas" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
