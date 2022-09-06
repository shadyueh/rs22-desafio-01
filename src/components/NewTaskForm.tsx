import styles from "./NewTaskForm.module.css";
import plusIcon from "../assets/plus-icon.svg";

export function NewTaskForm() {
  return (
    <form className={styles.newTask} action="">
      <input type="text" name="" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar <img src={plusIcon} alt="" /></button>
    </form>
  );
}