import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import "./Header.css";
import {Input, Text, Flex,Box, useColorModeValue} from'@chakra-ui/react'
import { useState } from "react";

export const Header = (props) => {
    const [lista, setLista] = useState("");
    const [error, setError] = useState(false)
    /*GUARDAR DATOS DE DESCRIPTION*/
    const [guardar, setGuardar] = useState("");

    /*AGREGAR Y GUARDAR TAREA*/
    const onSubmit = (e) => {
        e.preventDefault();
        props.handleOnSubmit(lista, guardar);
        setLista('');
        setGuardar('');
        window.location.reload();
        }

        const bg= useColorModeValue('white', 'black');
        const color= useColorModeValue('black', 'white')
    //INICIO GUARDAR TAREAS HEADER
    return (
      <Box w="100%" h="35%">
        <Flex justifyContent="center">
          <Text fontSize="25px" color="white" m="20px">
            TO DO LIST
          </Text>
        </Flex>
        <form onSubmit={onSubmit} className="formu">
          <Input
            bg={bg}
            color={color}
            w="70%"
            h="35px"
            borderRadius="15px"
            ml="25px"
            mr="25px"
            border="none"
            type="text"
            placeholder="Add a new task"
            value={lista}
            onChange={(e) => {
              setLista(e.target.value);
              setError(false);
              if (e.target.value.length < 3) {
                setError(true);
              }
            }}
          />
          <button className="IconName">
            <AiOutlinePlus className="add" />
          </button>
          <Input
            bg={bg}
            color={color}
            w="70%"
            h="60px"
            borderRadius="15px"
            mt="5px"
            mr="35px"
            mb="10px"
            border="none"
            type="text"
            placeholder="Add a descriptión"
            value={guardar}
            onChange={(e) => {
              setGuardar(e.target.value);
              console.log(guardar);
            }}
          />
        </form>
        {error ? <Text color='red'> ⚠ muy corta</Text> : <></>}
      </Box>
    );
};

export default Header;

