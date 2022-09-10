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
  let createdTasks = tasks.length;
  let doneTasks = tasks.filter((task) => task.status === "done").length;

  function handleCreateNewTask(newTaskContent: string) {
    let newTask: TaskProps = {
      id: newTaskContent,
      content: newTaskContent,
      status: "todo",
      onDeleteTask: deleteTask,
      onUpdateStatus: updateTaskStatus,
    };

    setTasks((state) => {
      return [...state, newTask];
    });
  }

  function deleteTask(taskToDelete: string) {
    setTasks((state) => {
      return state.filter((task) => {
        return task.id !== taskToDelete;
      });
    });
  }

  function updateTaskStatus(taskToUpdate: string, isChecked: boolean) {
    setTasks((state) => {
      let newState: TaskProps[] = state.map((task) => {
        if (task.id === taskToUpdate) {
          return { ...task, status: isChecked ? "done" : "todo" };
        }
        return task;
      });
      // console.log(newState);
      return newState;
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
