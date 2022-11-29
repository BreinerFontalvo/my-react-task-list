import React, { useState, useEffect } from "react";
import "./Task.css";
import {Text, Button, useColorModeValue} from '@chakra-ui/react'

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

  const letra= useColorModeValue('black','white')

return (
  <div className="cajita">
    <section className="pendiente">
      <Text color="white"> You have {log} pending tasks</Text>
    </section>
    <section className="boton">
      <Button color={letra} bg='red' borderRadius='30px' mr='35px'  mt='20px' mb='20px' onClick={handleOnClick}>
        Clean
      </Button>
    </section>
  </div>
);
};
export default Task;
