import React, { useState, useEffect } from "react";
import "./Task.css";
import {Text} from '@chakra-ui/react'

export const Task = () => {
    const [log, setLog] = useState(0);
    const handleOnClick = () => {
    localStorage.clear();
    window.location.reload();
};

    useEffect(() => {
    let tarea = JSON.parse(localStorage.getItem("tasks"));
    if (tarea === null) {
    setLog(0);
    } else {
    setLog(tarea.length);
    }
}, [log]);

return (
  <div className="cajita">
    <section className="pendiente">
      <Text color="white"> You have {log} pending tasks</Text>
    </section>
    <section className="boton">
      <button onClick={handleOnClick} className="btn">
        Clean
      </button>
    </section>
  </div>
);
};
export default Task;
