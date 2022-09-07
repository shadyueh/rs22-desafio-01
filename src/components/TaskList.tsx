import { TaskInfo } from "./TaskInfo";
import { Task, TaskProps } from "./Task";
import { NoTask } from "./NoTask";

import styles from "./TaskList.module.css";

interface TaskListProps {
  items: TaskProps[];
}

export function TaskList({ items }: TaskListProps) {
  return (
    <div className={styles.tasks}>
      <TaskInfo />
      {Array.isArray(items) && items?.length > 0 ? (
        items.map((task) => {
          return <Task key={task.id} id={task.id} content={task.content} />;
        })
      ) : (
        <NoTask />
      )}
    </div>
  );
}
