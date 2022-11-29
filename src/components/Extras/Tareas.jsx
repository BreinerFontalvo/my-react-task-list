import React from 'react'
import Header from "../Header/Header";
import "../../App.css";
import { TaskForm } from "../TaskForm/TaskForm";
import Task from "../Task/Task";
import useTasks from "../../hooks/useTasks";
import {Box, Flex, useColorModeValue} from '@chakra-ui/react'


export const Tareas = () => {

    const { handleOnSubmit, tasks } = useTasks();

    const bg = useColorModeValue("gray", "rgb(14, 20, 29)");

    return (
      <Box
        w="100%"
        h="94%"
        display="flex"
        align="center"
        justifyContent={"center"}
      >
        <Flex align="center">
          <Box
            w="80vh"
            h="70vh"
            bg={bg}
            borderRadius="15px"
            boxShadow="dark-lg"
          >
            <Header handleOnSubmit={handleOnSubmit} />
            <TaskForm tasks={tasks} />
            <Task />
          </Box>
        </Flex>
      </Box>
    );
}
export default Tareas;
