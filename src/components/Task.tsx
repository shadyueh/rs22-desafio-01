import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <Checkbox id={id} label={content} />
      <button onClick={handleDeleteTask} title="Remover tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
