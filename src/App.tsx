import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskProps } from "./components/Task";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";
import "./global.css";

const emptyTaskList: TaskProps[] = [];

const data: TaskProps[] = [
  {
    id: "1",
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: "2",
    content:
      "Nulla semper vehicula tortor non ultricies. Donec ac quam ante, in feugiat sapien. Etiam massa turpis, laoreet et auctor sed, dictum sed urna. Fusce lorem ipsum, semper sit amet laoreet ac, aliquam at purus. ",
  },
];

function App() {
  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countFinishedTasks, setCountFinishedTasks] = useState(0);
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
