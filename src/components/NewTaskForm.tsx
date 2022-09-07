import styles from "./NewTaskForm.module.css";
import plusIcon from "../assets/plus-icon.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface NewTaskFormProps {
  onCreateTask: (taskText: string) => void;
}

export function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(newTaskText);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    let message = "";
    if (event.target.validity.patternMismatch)
      message = "Não é permitido apenas espaços brancos";
    if (event.target.validity.valueMissing)
      message = "Esse campo é obrigatório";
    event.target.setCustomValidity(message);
  }

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        pattern="(.|\s)*\S(.|\s)*"
        required
      />
      <button type="submit">
        Criar <img src={plusIcon} alt="" />
      </button>
    </form>
  );
}
