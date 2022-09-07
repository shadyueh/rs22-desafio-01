import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
}

export function Task({ id, content }: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox id={id} label={content} />
      <button title="Remover tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
