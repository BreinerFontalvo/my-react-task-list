import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import "./TaskList.css";
//aqui inicia la lista
export const List = ({ task }) => {
    const [marcado, setMarcado] = useState(false);
    const [claseLabel, setClaseLabel] = useState("label");
    //condicional
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
    //desplegar mensaje
    const [abrir, setAbrir] = useState(false);
    const [claseTitulo, setClaseTitulo] = useState("");

    const handleOpen = (e) => {
        console.log(e);
        if (abrir) {
        setClaseTitulo(" ");
        setAbrir(false);
        } else {
        setClaseTitulo("texto");
        setAbrir(true);
        }
    };

    //eliminar
    const handleOnClick = (e) => {
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem("tasks"));

        console.log(data);

        for (let i = 0; i < data.length; i++) {
        if (data[i].name === task.name) {
            console.log("numero");
            data.splice(i, 1);
            break;
        }
        }

        localStorage.setItem("tasks", JSON.stringify(data));
        console.log(data);

        console.log(task.name);
        //localStorage.removeItem();
        window.location.reload();
    };

    //inicia los inputss
    return (
        <>
        <label className={claseLabel}>
            <div className="list">
            <input
                type="checkbox"
                onClick={handleOpen}
                checked={marcado}
                onChange={tareaHecha}
                className="checkbox-round"
                value="first-checkbox"
            ></input>
            {task.name}
            <button onClick={handleOnClick}>
                <BiTrash className="icono2" />
            </button>
            </div>
        </label>
        {abrir ? <h5 className={claseTitulo}>Realizada</h5> : null}
        </>
    );
};
