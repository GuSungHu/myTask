//import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="app">
      <TaskForm />
      <header className="app_header">Header Section</header>
      <main className="app_main">
        <section className="task_column">section 1</section>
        <section className="task_column">section 2</section>
        <section className="task_column">section 3</section>
      </main>
    </div>
  );
}

export default App;
