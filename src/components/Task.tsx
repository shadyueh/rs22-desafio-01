import { Trash } from "phosphor-react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  status: "todo" | "done";
  onDeleteTask: (id: string) => void;
  onUpdateStatus: (id: string, checked: boolean) => void;
}

export function Task({ id, content, status, onDeleteTask, onUpdateStatus }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function updateTaskStatus(checked: boolean) {
    onUpdateStatus(id, checked);
  }

  return (
    <div className={styles.task}>

      <Checkbox id={id} label={content} onCheck={updateTaskStatus} />

      <button onClick={handleDeleteTask} title="Remover tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
