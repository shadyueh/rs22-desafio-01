import { TaskInfo } from "./TaskInfo";
import { TaskItem, TaskItemProps } from "./TaskItem";
import { NoTask } from "./NoTask";

import styles from "./TaskList.module.css";

export interface TaskListProps {
  items : TaskItemProps[]
}

export function TaskList({ items } : TaskListProps) {
  return (
    <div className={styles.tasks}>
      {items.map((task) => {
        return <TaskItem key={task.key} content={task.content} />;
      })}
    </div>
  );
}
