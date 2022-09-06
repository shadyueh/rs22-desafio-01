import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";

import styles from "./App.module.css";

import "./global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <NewTaskForm />
    </div>
  );
}

export default App;
