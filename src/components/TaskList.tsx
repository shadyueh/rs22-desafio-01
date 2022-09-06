import { Circle, CheckCircle, Trash } from "phosphor-react";
import { TaskInfo } from "./TaskInfo";
import { TaskItem } from "./TaskItem";
import { NoTask } from "./NoTask";

import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div className={styles.tasks}>
      <TaskInfo />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}
