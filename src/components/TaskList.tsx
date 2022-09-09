import { TaskInfo } from "./TaskInfo";
import { Task, TaskProps } from "./Task";
import { NoTask } from "./NoTask";

import styles from "./TaskList.module.css";
import { useState } from "react";

interface TaskListProps {
  items: TaskProps[];
  created: number;
  done: number;
}

export function TaskList({ items, created, done }: TaskListProps) {
  const hasTasks = Array.isArray(items) && items.length > 0;

  const listTasks = () => {
    return hasTasks ? (
      items.map((task) => {
        return <Task key={task.id} {...task} />;
      })
    ) : (
      <NoTask />
    );
  };

  return (
    <div className={styles.tasks}>
      <TaskInfo created={created} done={done} />
      {listTasks()}
    </div>
  );
}
