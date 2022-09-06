import { Circle, CheckCircle, Trash } from "phosphor-react";

import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <div className={styles.task}>
      <Circle size={24} className={styles.checkbox} />

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
