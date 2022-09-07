import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";

import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <div className={styles.task}>
      <Checkbox size={24}  />

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      
      <button title="Remover tarefa">
        <Trash size={16} />
      </button>
    </div>
  );
}
