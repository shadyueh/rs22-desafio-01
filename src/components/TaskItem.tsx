import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";

import styles from "./TaskItem.module.css";

export interface TaskItemProps {
  key: string;
  content: string;
}

export function TaskItem({ key, content }: TaskItemProps) {
  return (
    <div key={key} className={styles.task}>
      <Checkbox size={24} />

      <p>{content}</p>

      <button title="Remover tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
