import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'



export const Menu = () => {
    return (
        <Box w="100%" h='50px' bg="blue" color="white" >
            <Flex justify="space-around">
                <Link to="./Home">Home</Link>
                <Link to="./SobreNosotros">Sobre Nosotros</Link>
                <Link to="./Tareas">Tareas</Link>
            </Flex>
        </Box>
    );
}
export default Menu;