import React from 'react'
import './home.css';
import {useState} from 'react';
import {Text, Button, Input , Box} from '@chakra-ui/react'

export const Home = () => {

    const[nombre, setNombre]= useState(" ")
    
    const onSubmit=(e) => {
        e.preventDefault();
        setNombre (e.target.user.value);
        e.target.user.value = " ";
    }


    return (
        <Box>
            <form className="name" onSubmit={onSubmit}>
            <Input
                mr='20px'
                borderRadius='30px'
                border='none'
                w='25%'
                h='25%'
                type="text"
                name="user"
                placeholder="Typing your name"
            ></Input>
            <Button bg="#ffcd3c" borderRadius="15px" type="submit">
                Send
            </Button>
            </form>
            <Text fontSize="40px" ml='700px'>Welcome {nombre} to do list</Text>
        </Box>
        );
}
export default Home;