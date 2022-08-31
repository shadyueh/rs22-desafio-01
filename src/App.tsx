import { useState } from "react";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main></main>
    </div>
  );
}

export default App;
