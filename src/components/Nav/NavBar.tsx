/**
 * 
 * NAVBAR COMPONENT
 * This component provides the primary navigation interface for the application.
 * Key Functionalities:
 * - SPA Navigation: Integrates 'react-router-dom' NavLink with Chakra UI to enable seamless transitions without page reloads.
 * - Persistent Header: Utilizes 'sticky' positioning to remain visible at the top while the user scrolls.
 * - Dynamic Styling: Implements '_activeLink' properties to visually indicate the current section to the user.
 * - Component Composition: Houses the brand identity (Logo) and the 'CartWidget' for global access to the shopping cart.
 * - Responsive Layout: Employs Flexbox and Container components to ensure a balanced and accessible design across screen sizes.
 *
 * 
 * COMPONENTE NAVBAR
 * Este componente proporciona la interfaz de navegación principal de la aplicación.
 * Funcionalidades Clave:
 * - Navegación SPA: Integra NavLink de 'react-router-dom' con Chakra UI para permitir transiciones fluidas sin recargar la página.
 * - Encabezado Persistente: Utiliza posicionamiento 'sticky' para permanecer visible en la parte superior mientras el usuario se desplaza.
 * - Estilo Dinámico: Implementa propiedades '_activeLink' para indicar visualmente la sección actual al usuario.
 * - Composición de Componentes: Alberga la identidad de marca (Logo) y el 'CartWidget' para el acceso global al carrito de compras.
 * - Diseño Responsivo: Emplea componentes Flexbox y Container para garantizar un diseño equilibrado y accesible en diversos tamaños de pantalla.
 */


import { Box, Flex, Text, Link as ChakraLink, Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Box bg="white" px={4} boxShadow="md" borderBottom="1px solid #e2e8f0" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          
          <ChakraLink 
            as={NavLink} 
            //@ts-ignore
            to="/" 
            style={{ textDecoration: 'none' }}
          >
            <Text 
              fontSize="3xl" 
              fontWeight="extrabold" 
              bgGradient="linear(to-r, teal.500, green.400)" 
              bgClip="text"
            >
              Araperful
            </Text>
          </ChakraLink>

          <Flex gap={10}>
            <ChakraLink 
              as={NavLink} 
              //@ts-ignore
              to="/" 
              fontWeight="bold" 
              color="gray.600" 
              _activeLink={{ color: 'teal.500' }}
            >
              Inicio
            </ChakraLink>

            {/* CORREGIDO: Ahora apunta a la ruta de tu Galería */}
            <ChakraLink 
              as={NavLink} 
              //@ts-ignore
              to="/fragancias" 
              fontWeight="bold" 
              color="gray.600" 
              _activeLink={{ color: 'teal.500' }}
            >
              Fragancias
            </ChakraLink>

            {/* CORREGIDO: Quitamos la categoría y lo dejamos listo para Contacto */}
            <ChakraLink 
              as={NavLink} 
              //@ts-ignore
              to="/contacto" 
              fontWeight="bold" 
              color="gray.600" 
              _activeLink={{ color: 'teal.500' }}
            >
              Contacto
            </ChakraLink>
          </Flex>

          <CartWidget />
          
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;