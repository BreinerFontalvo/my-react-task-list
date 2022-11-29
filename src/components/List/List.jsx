import { BiTrash } from "react-icons/bi";
import { AiOutlineForm } from "react-icons/ai";
import { useState } from "react";
import "./List.css";
import {useColorModeValue, Input, Box, Button} from '@chakra-ui/react'

//INICIA LISTA
export const List = ({ task }) => {
  const [marcado, setMarcado] = useState(false); //MARCADO TAREA
  const [claseLabel, setClaseLabel] = useState("label"); //EDITAR LABEL
  const [abrir, setAbrir] = useState(false); //DESPLIEGUE MENSAJE DE REALIZADO
  const [claseTitulo, setClaseTitulo] = useState(""); //EDITAR LO QUE VA A SALIR
  const [edit, setEdit] = useState(false); //DESPLIEGUE EDITAR TAREA
  const [add, setAdd] = useState(""); //CONTENIDO DEL EDITAR
  const [list2, setList2] = useState(""); //ALAMCENAR DATOS DEL EDITAR
  

  //TAREA TACHADA
  const tareaHecha = (e) => {
    console.log(e);
    if (marcado) {
      setClaseLabel("label");
      setMarcado(false);
    } else {
      setClaseLabel("label-underline");
      setMarcado(true);
    }
  };

  //DESPLEGAR MENSAJE
  const handleOpen = () => {
    if (abrir) {
      setClaseTitulo(" ");
      setAbrir(false);
    } else {
      setClaseTitulo("texto");
      setAbrir(true);
    }
  };

  //ELIMINAR
    const useDelete = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("tasks"));
    //ELIMINAR DATO SELECCIONADO
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === task.name) {
        data.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(data));
    window.location.reload();
  };
  //FINALIZA ELIMINAR

  //EDITAR
  //DESPLIEGUE EDITAR
  const useEdit = () => {
    if (edit) {
      setEdit(false);
      setAdd(" ");
    } else {
      setAdd("agregar");
      setEdit(true);
    }
  };
  //RECOJER EL DATO
  const handleOnSubmit2 = (e) => {
    e.preventDefault();
    let array = localStorage.getItem("tasks");
    array = JSON.parse(array);
    //ACTUALIZAR EL DATO DE NUESTRA TAREA
    for (let i = 0; i < array.length; i++) {
      if (list2 == array[i].name) {
        alert("la tarea ya existe");
        break;
      } else if (array[i].name == task.name) {
        array[i].name = list2;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(array));
    window.location.reload(); 
  };
  //INICIA LOS INPUTS

  const bg= useColorModeValue('white', 'black');
  const color= useColorModeValue('black', 'white')

  return (
    <>
      <label className={claseLabel}>
        <Box
          bg={bg}
          w="78%"
          p="5px"
          display="flex"
          mr="5px"
          ml="28px"
          borderRadius="5px"
        >
          <Box w="50%" h="30px" display="flex" gap="15px" alignItems="center">
            {/*NUESTRO INPUT*/}
            <Input
              type="checkbox"
              bg={bg}
              color={color}
              w="20px"
              h="20px"
              onClick={handleOpen}
              checked={marcado}
              onChange={tareaHecha}
              value="first-checkbox"
            ></Input>
            {task.name}
          </Box>
          <div className="iconos">
            {/* ELIMINAR */}
            <button onClick={useDelete}>
              <BiTrash className="icono2" />
            </button>
            {/*EDITAR*/}
            <button onClick={useEdit}>
              <AiOutlineForm className="icono1" />
            </button>
          </div>
        </Box>
      </label>
      <section className="yes">
        <section className="descrip">{task.description}</section>
        {abrir ? <h5 className={claseTitulo}>✅</h5> : null}
      </section>
      {/*DESPLIEGUE MENSAJE*/}

      {/*DESPLIEGUE EDITAR*/}
      {edit ? (
        <form onSubmit={handleOnSubmit2}>
          <input
            type="text"
            placeholder="Editar"
            className={add}
            onChange={(e) => {
              setList2(e.target.value);
            }}
          ></input>
          <Button w='70px' h='25px' bg="rgb(156, 233, 40)" borderRadius="20px" mr='35px' ml='15px' mb='5px'type="submit">
            Editar
          </Button>
        </form>
      ) : null}
    </>
  );
};
//FINALIZA TODO
