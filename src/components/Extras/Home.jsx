import React from 'react'
import './home.css';
import {useState} from 'react';

export const Home = () => {

    const[nombre, setNombre]= useState(" ")
    
    const onSubmit=(e) => {
        e.preventDefault();
        setNombre (e.target.user.value);
        e.target.user.value = " ";
    }


    return (
        <div className="home">
            <form className="name" onSubmit={onSubmit}>
            <input
                className="nombre"
                type="text"
                name='user'
                placeholder="Typing your name"
            ></input>
            <button className="send" type="submit">
                Send
            </button>
            </form>
            <section className="welcome">
            <h1>Welcome {nombre} to do list</h1>
            </section>
        </div>
    );
}
export default Home;