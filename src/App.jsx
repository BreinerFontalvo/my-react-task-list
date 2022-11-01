import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import Task from "./components/Task";
import { List } from "./components/List";

function App() {
  //lista predeterminada
  const [tasks, setTasks] = useState([{ name: "first" }]);

  //funcion guardar en la lista
  function createLista(taskName) {
    if (!tasks.find((task) => task.name === taskName)) {
      setTasks([...tasks, { name: taskName }]);
    }
  }
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const cleanTasks = () => {
  //   setTaskItems(taskItems.filter((task)));
  //   setshowCompleted(false);
  // };

  //tabla
  return (
    <div className="container">
      <Header createLista={createLista} />
      <TaskForm tasks={tasks} />
      <Task />
    </div>
  );
}

export default App;
