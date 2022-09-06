import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";
import "./global.css";

function App() {
  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countFinishedTasks, setCountFinishedTasks] = useState(0);

  return (
    <div>
      <Header />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
