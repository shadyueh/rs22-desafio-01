import { TaskInfo } from "./TaskInfo";
import { Task, TaskProps } from "./Task";
import { NoTask } from "./NoTask";

import styles from "./TaskList.module.css";

interface TaskListProps {
  items?: TaskProps[];
}

export function TaskList({ items }: TaskListProps) {
  const hasTasks = Array.isArray(items) && items.length > 0;

  return (
    <div className={styles.tasks}>
      <TaskInfo created={hasTasks ? items.length : 0} done={0} />
      {hasTasks ? (
        items.map((task) => {
          return <Task key={task.id} id={task.id} content={task.content} />;
        })
      ) : (
        <NoTask />
      )}
    </div>
  );
}
