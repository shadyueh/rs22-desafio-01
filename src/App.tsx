import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskProps } from "./components/Task";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";
import "./global.css";

const emptyTaskList: TaskProps[] = [];

function App() {
  const [tasks, setTasks] = useState(emptyTaskList);

  function handleCreateNewTask(taskText: string) {
    setTasks([...tasks, { id: tasks.length.toString(), content: taskText }]);
  }

  return (
    <div>
      <Header />
      <NewTaskForm onTaskCreate={handleCreateNewTask} />
      <TaskList items={tasks} />
    </div>
  );
}

export default App;
