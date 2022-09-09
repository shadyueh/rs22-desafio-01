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
  const [createdTasks, setCreatedTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);

  function handleCreateNewTask(newTaskContent: string) {
    let newTask: TaskProps = {
      id: newTaskContent,
      content: newTaskContent,
      status: "todo",
      onDeleteTask: deleteTask,
    };

    setTasks((state) => {
      return [...state, newTask];
    });

    setCreatedTasks((state) => {
      return state + 1;
    });
  }

  function deleteTask(taskToDelete: string) {
    setTasks((state) => {
      return state.filter((task) => {
        return task.id !== taskToDelete;
      });
    });

    setCreatedTasks((state) => {
      return state - 1;
    });
  }

  return (
    <div>
      <Header />
      <NewTaskForm onCreateTask={handleCreateNewTask} />
      <TaskList items={tasks} created={createdTasks} done={doneTasks} />
    </div>
  );
}

export default App;
