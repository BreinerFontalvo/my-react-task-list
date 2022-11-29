import React from 'react'
import {Link} from 'react-router-dom'
import {useColorMode , useColorModeValue} from '@chakra-ui/react'
import { Box, Flex, Button } from '@chakra-ui/react'
export const Menu = () => {

    const {colorMode, toggleColorMode} = useColorMode()
    
    const fondo= useColorModeValue('gray', 'black')
    const letra= useColorModeValue('white', 'black')

    return (
        <Box bg={fondo} color={letra} w="100%" h="50px">
            <Flex justify="space-around">
            <Link to="./Home">Home</Link>
            <Link to="./SobreNosotros">Sobre Nosotros</Link>
            <Link to="./Tareas">Tareas</Link>
            <Button onClick={toggleColorMode} >
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            </Flex>
        </Box>
        );
}
export default Menu;