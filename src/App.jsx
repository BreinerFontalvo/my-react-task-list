import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import Task from "./components/Task";
//AQUI INICIA TODO
function App() {
  const [tasks, setTasks] = useState([]);

  //FUNCION QUE NO GUARDE DOS DATOS IGUALES
  function createLista(taskName) {
    if (!tasks.find((task) => task.name === taskName)) {
      setTasks([...tasks,{ name: taskName }]);
    }
    
  };
  //GUARDANDO EL DATO EN UNA VARIABLE
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  },[]);
  //RENDERIZAMOS EL DATO
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //TABLA
  return (
    <div className="container">
      <Header createLista={createLista} />
      <TaskForm tasks={tasks} />
      <Task />
    </div>
  );
}

export default App;
//FINALIZA TODO