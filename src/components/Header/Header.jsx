import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import "./Header.css";
import {Input, Text, Flex} from'@chakra-ui/react'
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

    //INICIO GUARDAR TAREAS HEADER
    return (
        <div className="Header">
            <Flex justify="center">
            <Text fontSize="25px" color="white">TO DO LIST</Text>
            </Flex>
            <form onSubmit={onSubmit} className="formu">
            <Input
            w='70%'
            h='30px'
            borderRadius='15px'
            ml='25px'
            mr='25px'
                border='none'
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
            w='70%'
            h='50px'
            borderRadius='15px'
            mt='5px'
            ml='25px'
            mb='20px'
            border='none'
                type="text"
                placeholder="Add a descriptión"
                value={guardar}
                onChange={(e) => {
                setGuardar(e.target.value);
                console.log(guardar);
                }}
            />
            </form>
            {error ? <span role="alert"> muy corta</span> : <></>}
        </div>
        );
};

export default Header;

