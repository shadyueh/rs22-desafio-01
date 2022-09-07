import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Task, TaskProps } from "./components/Task";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";
import "./global.css";

const emptyTaskList: TaskProps[] = [];

function App() {
  const [tasks, setTasks] = useState(emptyTaskList);

  function handleCreateNewTask(newTaskContent: string) {
    let newTaskId = (tasks.length + 1).toString();
    let newTask: TaskProps = {
      id: newTaskId,
      content: newTaskContent,
      onDeleteTask: handleDeleteTask,
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <NewTaskForm onCreateTask={handleCreateNewTask} />
      <TaskList items={tasks} onRemoveItem={handleDeleteTask} />
    </div>
  );
}

export default App;
