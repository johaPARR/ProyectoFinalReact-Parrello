/**
 * 
 * GALLERY COMPONENT
 * This component provides a visual showcase of the brand's fragrance collection.
 * Key Functionalities:
 * - Visual Asset Management: Handles a large array of image assets using a optimized mapping logic.
 * - Responsive Grid Layout: Utilizes Chakra UI's SimpleGrid to create a fluid, multi-column gallery that adapts from mobile to ultra-wide screens.
 * - Interaction Design: Implements high-performance CSS transitions and hover effects to enhance user engagement.
 * - Brand Storytelling: Integrates a specialized 'Brand Card' using Flexbox spanning, which reinforces the brand's mission and value proposition.
 * - Error Resilience: Includes an 'onError' handler for images to ensure a consistent UI even if a specific asset fails to load.
 *
 * 
 * COMPONENTE GALERÍA
 * Este componente proporciona un escaparate visual de la colección de fragancias de la marca.
 * Funcionalidades Clave:
 * - Gestión de Activos Visuales: Maneja un extenso array de imágenes mediante una lógica de mapeo optimizada.
 * - Diseño de Cuadrícula Responsiva: Utiliza SimpleGrid de Chakra UI para crear una galería fluida de múltiples columnas que se adapta desde móviles hasta pantallas ultra anchas.
 * - Diseño de Interacción: Implementa transiciones CSS de alto rendimiento y efectos de hover para mejorar el compromiso del usuario.
 * - Storytelling de Marca: Integra una 'Tarjeta de Marca' especializada mediante expansión de Flexbox, que refuerza la misión y propuesta de valor de la marca.
 * - Resiliencia ante Errores: Incluye un manejador 'onError' para las imágenes que garantiza una UI consistente incluso si un archivo específico falla al cargar.
 */

import { Box, SimpleGrid, Image, Container, Heading, Text, VStack, Flex } from '@chakra-ui/react';

const Galeria = () => {
    // LISTA DE FRAGANCIAS
    const fotos = [
        'acquafem(fra).jpg', 'acquaman(fra).webp', 'arabe1(fra).avif', 'arabe2(fra).jpg',
        'armani(fra).webp', 'badboys(fra).webp', 'blueseduccion(fra).webp', 'cacharel(fra).jpg',
        'cool(fra).jpg', 'cool2(fra).webp', 'dolcegabana(fra).webp', 'extase(fra).jpg',
        'Fahrenheit(fra).webp', 'fame(fra).jpg', 'flower(fra).webp', 'goodgirl(fra).webp',
        'heroes(fra).webp', 'idole(fra).webp', 'imagen(fra).jpg', 'imagen2(fra).webp',
        'imagen3(fra).jpg', 'imagen4(fra).webp', 'imagen5(fra).webp', 'imagen6(fra).jpg',
        'imagen7(fra).webp', 'imagen9(fra).webp', 'imagen10(fra).jpg', 'imagen11(fra).webp',
        'imagen12(fra).webp', 'imagen13(fra).jpg', 'imagen14(fra).webp', 'imagen15(fra).jpg',
        'imagen17(fra).webp', 'invictus(fra).jpg', 'lanuit(fra).jpg', 'lavida(fra).avif',
        'missdior(fra).webp', 'miyaki(fra).jpg', 'myway(fra).jpg', 'nichefemme(fra).png',
        'nichefemme2(fra).webp', 'olimpea(fra).jpg', 'onemillion(fra).webp', 'phantom(fra).webp',
        'poloblue(fra).webp', 'scandal(fra).webp', 'scandalmen(fra).webp', 'tommy(fra).jpg',
        'xsman(fra).webp', 'ysl(fra).jpg', 'imagenesULTIMAS6(fra).webp', 'imagenesULTIMAS7(fra).webp',
        'imagenesULTIMAS8(fra).jpg', 'imagenesULTIMAS9(fra).jpg', 'imagenesULTIMAS10(fra).jpg',
        'imagenesULTIMAS11(fra).jpg', 'imagenesULTIMAS13(fra).jpg', 'imagenesULTIMAS15(fra).avif',
        'imagenesULTIMAS17(fra).jpg', 'imagenesULTIMAS19(fra).jpg', 'imagenULTIMAS(fra).avif',
        'imagenULTIMAS(fra).jpg', 'imagenULTIMAS2(fra).jpg'
    ];

    return (
        <Container maxW="1400px" py="40px">
            <Heading 
                mb="50px" 
                textAlign="center" 
                color="teal.600" 
                fontSize="4xl" 
                fontWeight="extrabold"
                textTransform="uppercase"
                letterSpacing="wider"
            >
                Galería de Fragancias
            </Heading>
            
            {/* Cambiamos spacing por gap y usamos string "25px" para evitar errores de tipo */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} gap="25px">
                {fotos.map((nombreFoto, index) => (
                    <Box 
                        key={index} 
                        borderRadius="20px" 
                        overflow="hidden" 
                        boxShadow="xl"
                        transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                        _hover={{ 
                            transform: 'scale(1.05)', 
                            boxShadow: "2xl"
                        }}
                        bg="white"
                        border="1px solid"
                        borderColor="gray.100"
                    >
                        <Image 
                            src={`./img/${nombreFoto}`} 
                            alt={`Fragancia ${nombreFoto}`}
                            style={{ 
                                objectFit: 'cover',
                                width: '100%',
                                height: '380px'
                            }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/380?text=Imagen+En+Camino";
                            }}
                        />
                    </Box>
                ))}

                {/* CUADRO DE MARCA - Expandido para ocupar el espacio restante */}
<Flex 
    direction="column" 
    align="center" 
    justify="center" 
    bg="white" 
    p="40px" 
    borderRadius="20px" 
    boxShadow="xl"
    border="1px solid"
    borderColor="gray.100"
    height="380px"
    textAlign="center"
    gridColumn={{ base: "auto", lg: "span 2", xl: "span 2" }} // <--- ESTO hace que ocupe 2 lugares
>
    <VStack gap="20px" width="100%">
        <Text fontSize="lg" color="gray.700" fontStyle="italic" lineHeight="tall">
            "Nuestras fragancias son el fruto de años de dedicación y excelencia. 
            Fusionamos pureza orgánica con una calidad inigualable para 
            aportar elegancia a tu imagen y abrir tus caminos."
        </Text>
        
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
            "Cuidamos tu bolsillo mientras tú potencias tu presencia. Una buena 
            fragancia es el éxito que el mundo exige hoy."
        </Text>

        <Box pt="15px">
            <Text 
                fontWeight="bold" 
                color="teal.600" 
                fontSize="2xl" 
                letterSpacing="widest" 
                textTransform="uppercase"
            >
                Alma lista para brillar
            </Text>
        </Box>
    </VStack>
</Flex>
            </SimpleGrid>
        </Container>
    );
};

export default Galeria;