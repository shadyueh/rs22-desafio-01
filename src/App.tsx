import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { NoTask } from "./components/NoTask";
import { TaskInfo } from "./components/TaskInfo";

import styles from "./App.module.css";
import "./global.css";

function App() {
  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countFinishedTasks, setCountFinishedTasks] = useState(0);

  return (
    <div>
      <Header />
      <NewTaskForm />
      <div className={styles.tasks}>
        <TaskInfo />
        <NoTask />
      </div>
    </div>
  );
}

export default App;
