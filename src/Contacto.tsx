/**
 * 
 * CONTACT COMPONENT
 * This component provides an omni-channel contact interface for brand interaction.
 * Key Functionalities:
 * - Immersive UI: Uses high-impact visual backgrounds with 'fixed' attachment and overlay layers for readability.
 * - Social Media Integration: Features a responsive grid with direct links to WhatsApp, Instagram, Facebook, and Email.
 * - External Linking: Correctly implements 'noopener noreferrer' for security and SEO when linking to external portfolios or stores.
 * - Interactive Design: Incorporates Chakra UI's transition and hover effects (translateY) to improve visual feedback.
 * - Accessibility: Ensures high contrast between text shadows and backgrounds for optimal legibility.
 *
 * 
 * COMPONENTE DE CONTACTO
 * Este componente proporciona una interfaz de contacto omnicanal para la interacción con la marca.
 * Funcionalidades Clave:
 * - UI Inmersiva: Utiliza fondos visuales de alto impacto con fijación 'fixed' y capas de superposición para mejorar la legibilidad.
 * - Integración de Redes Sociales: Presenta una cuadrícula responsiva con enlaces directos a WhatsApp, Instagram, Facebook y Email.
 * - Enlaces Externos: Implementa correctamente 'noopener noreferrer' por seguridad y SEO al vincular a portfolios o tiendas externas.
 * - Diseño Interactivo: Incorpora efectos de transición y hover de Chakra UI (translateY) para mejorar el feedback visual.
 * - Accesibilidad: Garantiza un alto contraste mediante sombras de texto y fondos optimizados para una legibilidad ideal.
 */


import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  Flex,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import * as FaIcons from "react-icons/fa";

const Contacto = () => {
  return (
    <Box
      minH="100vh"
      w="100%"
      backgroundImage="url('./img/marcoContacto.avif')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py="50px"
      position="relative"
    >
      {/* Capa de contraste */}
      <Box 
        position="absolute" 
        top="0" left="0" w="100%" h="100%" 
        bg="blackAlpha.400" 
        zIndex="1" 
      />

      <Container maxW="container.lg" position="relative" zIndex="2">
        <VStack gap="4" mb="50px" textAlign="center" color="white">
          <Heading as="h1" size="2xl" textShadow="2px 2px 8px rgba(0,0,0,0.6)">
            Contacto
          </Heading>
          <Text fontSize="xl" fontWeight="bold" textShadow="1px 1px 4px rgba(0,0,0,0.5)">
            ¡Estamos para ayudarte! Elegí el medio que prefieras:
          </Text>
        </VStack>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          gap="10"
        >
          {/* 1. WhatsApp */}
          <Flex 
            direction="column" align="center" justify="center" 
            bg="whiteAlpha.900" p="30px" borderRadius="2xl" 
            boxShadow="0px 15px 35px rgba(0,0,0,0.3)" 
            transition="all 0.3s"
            _hover={{ transform: "translateY(-10px)" }}
          >
            <FaIcons.FaWhatsapp size="40px" color="#25D366" />
            <Text fontWeight="bold" mt="3" fontSize="lg" color="gray.800">WhatsApp</Text>
            <Link 
              href="https://wa.me/5493514789656" 
              target="_blank" 
              rel="noopener noreferrer" 
              color="teal.600" 
              fontWeight="600"
            >
              +54 9 351 478-9656
            </Link>
          </Flex>

          {/* 2. Email */}
          <Flex 
            direction="column" align="center" justify="center" 
            bg="whiteAlpha.900" p="30px" borderRadius="2xl" 
            boxShadow="0px 15px 35px rgba(0,0,0,0.3)" 
            transition="all 0.3s"
            _hover={{ transform: "translateY(-10px)" }}
          >
            <Text fontSize="40px">✉️</Text>
            <Text fontWeight="bold" mt="3" fontSize="lg" color="gray.800">Email</Text>
            <Link 
              href="mailto:araperful@gmail.com" 
              color="teal.600" 
              fontWeight="600"
            >
              araperful@gmail.com
            </Link>
          </Flex>

          {/* 3. Nuestro Showroom */}
          <Flex 
            direction="column" align="center" justify="center" 
            bg="whiteAlpha.900" p="30px" borderRadius="2xl" 
            boxShadow="0px 15px 35px rgba(0,0,0,0.3)" 
            transition="all 0.3s"
            _hover={{ transform: "translateY(-10px)" }}
          >
            <Text fontSize="40px">📍</Text>
            <Text fontWeight="bold" mt="3" fontSize="lg" color="gray.800">Nuestro Showroom</Text>
            <Text color="gray.600" textAlign="center">9 de Julio 996, Córdoba, Argentina.</Text>
          </Flex>

          {/* 4. Nuestra Tienda Oficial */}
          <Flex 
            direction="column" align="center" justify="center" 
            bg="whiteAlpha.900" p="30px" borderRadius="2xl" 
            boxShadow="0px 15px 35px rgba(0,0,0,0.3)" 
            transition="all 0.3s"
            _hover={{ transform: "translateY(-10px)", bg: "white" }}
            border="2px solid"
            borderColor="pink.200"
          >
            <Text fontSize="45px" mb="2">🏢</Text>
            <Text fontWeight="bold" fontSize="lg" color="gray.800">Tienda Oficial</Text>
            <Text fontSize="sm" color="pink.500" fontWeight="bold" mb="2">Araperful</Text>
            <Link 
              href="https://johaparr.github.io/Coderhouse-Fullstack-PreEntrega-3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              color="teal.600" 
              fontWeight="700"
              textAlign="center"
            >
              Visítanos
            </Link>
          </Flex>

          {/* 5. Instagram */}
          <Flex 
            direction="column" align="center" justify="center" 
            bg="whiteAlpha.900" p="30px" borderRadius="2xl" 
            boxShadow="0px 15px 35px rgba(0,0,0,0.3)" 
            transition="all 0.3s"
            _hover={{ transform: "translateY(-10px)" }}
          >
            <FaIcons.FaInstagram size="40px" color="#E1306C" />
            <Text fontWeight="bold" mt="3" fontSize="lg" color="gray.800">Instagram</Text>
            <Link 
              href="https://www.instagram.com/araperful" 
              target="_blank" 
              rel="noopener noreferrer" 
              color="teal.600" 
              fontWeight="600"
            >
              @araperful
            </Link>
          </Flex>

          {/* 6. Facebook */}
          <Flex 
            direction="column" align="center" justify="center" 
            bg="whiteAlpha.900" p="30px" borderRadius="2xl" 
            boxShadow="0px 15px 35px rgba(0,0,0,0.3)" 
            transition="all 0.3s"
            _hover={{ transform: "translateY(-10px)" }}
          >
            <FaIcons.FaFacebook size="40px" color="#4267B2" />
            <Text fontWeight="bold" mt="3" fontSize="lg" color="gray.800">Facebook</Text>
            <Link 
              href="https://www.facebook.com/araperful" 
              target="_blank" 
              rel="noopener noreferrer" 
              color="teal.600" 
              fontWeight="600"
            >
              Ara perful
            </Link>
          </Flex>

        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contacto;