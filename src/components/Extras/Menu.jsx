import React from 'react'
import {Link} from 'react-router-dom'
import {useColorMode , useColorModeValue} from '@chakra-ui/react'
import { Box, Flex, Switch } from '@chakra-ui/react'
export const Menu = () => {

    const {colorMode, toggleColorMode} = useColorMode()
    
    const fondo= useColorModeValue('gray', 'black')
    const letra= useColorModeValue('black', 'white')

    return (
      <Box bg={fondo} color={letra} w="100%" h="50px">
        <Flex justify="space-around" alignItems='center' p='10px'>
          <Link to="./Home">Home</Link>
          <Link to="./SobreNosotros">Sobre Nosotros</Link>
          <Link to="./Tareas">Tareas</Link>
          <Switch onChange={toggleColorMode}>
            {colorMode === "light" ? "🌙" : "☀"}
          </Switch>
        </Flex>
      </Box>
    );
}
export default Menu;