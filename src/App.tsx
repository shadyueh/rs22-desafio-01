import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList, TaskListProps } from "./components/TaskList";

import styles from "./App.module.css";
import "./global.css";

const data: TaskListProps = {
  items: [
    {
      key: "1",
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      key: "2",
      content:
        "Nulla semper vehicula tortor non ultricies. Donec ac quam ante, in feugiat sapien. Etiam massa turpis, laoreet et auctor sed, dictum sed urna. Fusce lorem ipsum, semper sit amet laoreet ac, aliquam at purus. ",
    },
  ],
};

function App() {
  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countFinishedTasks, setCountFinishedTasks] = useState(0);

  return (
    <div>
      <Header />
      <NewTaskForm />
      <TaskList items={data.items} />
    </div>
  );
}

export default App;
