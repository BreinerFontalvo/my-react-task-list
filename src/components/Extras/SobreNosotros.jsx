import React from 'react'
import {Text, Box, Flex} from '@chakra-ui/react'

export const SobreNosotros = () => {

    return (
      <Box color='black' bg="#ffcd3c" w="50%" h="80%" m="auto" mt='120px' borderRadius='15px'>
        <Flex direction="column" align='center'justify="center">
          <h1>TO DO LIST</h1>
          <b>
            <Text>¿QUIENES SOMOS?</Text>
          </b>
          <p>
            Somos una pagina creada con el fin de hacerte tu vida más
            organizada,
            <br />
            aqui podras escribir las tareas que tienes pendientes por realizar
            <br />y asi llevar una agenda más ordenada
          </p>
          <b>
            <Text>¿CUALES SON NUESTRAS PRINCIPALES FUNCIONES?</Text>
          </b>
          <p>
            Nuestra principal funcion es que nuestros usuarios mantengan una
            <br />
            agenda organizada de acuerdo a las tareas que tengan pendientes
          </p>
          <b>
            <Text>HERRAMIENTAS CON LA QUE FUE REALIZADA</Text>
          </b>
          <li>Javascript</li>
          <li>React</li>
          <li>CSS</li>
          <b>
            <Text>!!ESPEREMOS TE AYUDE MUCHO!!</Text>
          </b>
        </Flex>
      </Box>
    );
}
export default SobreNosotros;
