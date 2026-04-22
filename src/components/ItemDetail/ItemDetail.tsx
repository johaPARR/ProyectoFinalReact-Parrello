/**
 * * ITEMDETAIL COMPONENT
 * This component is responsible for displaying the complete detailed view of a specific fragrance.
 * Key Functionalities:
 * - Detailed Visualization: Shows high-quality images, pricing, categories, and descriptions.
 * - Context Integration: Connects with CartContext to trigger the 'addItem' function.
 * - Local UX State: Manages a temporary notification (toast/cartel) to confirm to the user that the item was added.
 * - Component Composition: Integrates the ItemCount component, passing the available stock and handling the addition logic.
 * - Responsive Design: Uses Flexbox to adapt the layout between mobile (column) and desktop (row) views.
 *
 * * COMPONENTE ITEMDETAIL
 * Este componente se encarga de mostrar la vista detallada completa de una fragancia específica.
 * Funcionalidades Clave:
 * - Visualización Detallada: Muestra imágenes de alta calidad, precios, categorías y descripciones.
 * - Integración de Contexto: Se conecta con CartContext para disparar la función 'addItem'.
 * - Estado de UX Local: Gestiona una notificación temporal (cartel) para confirmar al usuario que el producto fue agregado.
 * - Composición de Componentes: Integra el componente ItemCount, pasando el stock disponible y gestionando la lógica de adición.
 * - Diseño Responsivo: Utiliza Flexbox para adaptar el diseño entre vistas móviles (columna) y de escritorio (fila).
 */

import { Box, Container, Flex, Image, Text, Heading, Badge } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

interface ItemProps {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  img: string;
  stock: number;
}

const ItemDetail = ({ id, name, price, category, description, img, stock }: ItemProps) => {
  // @ts-ignore
  const context = useContext(CartContext);
  const [showCartel, setShowCartel] = useState(false);

  const handleOnAdd = (quantity: number) => {
    if (context && context.addItem) {
      // Pasamos los datos exactos que el carrito necesita para sumar
      context.addItem({ id, name, price, img }, quantity);
      
      setShowCartel(true);
      setTimeout(() => setShowCartel(false), 3000);
    }
  };

  return (
    <Container maxW="container.lg" py={10} position="relative">
      {showCartel && (
        <Box 
          position="fixed" top="20px" right="20px" bg="teal.500" 
          color="white" p={4} borderRadius="md" boxShadow="lg" zIndex={9999}
        >
          <Text fontWeight="bold">¡Agregado con éxito!</Text>
          <Text fontSize="sm">Sumaste {name} al carrito.</Text>
        </Box>
      )}

      <Flex direction={{ base: 'column', md: 'row' }} style={{ gap: '40px' }}>
        {/* MODIFICACIÓN: Agregamos la base URL antes de la ruta de la imagen */}
        <Image 
          src={`${import.meta.env.BASE_URL}${img}`} 
          alt={name} 
          borderRadius="lg" 
          boxSize="400px" 
          objectFit="cover" 
          shadow="md" 
        />
        
        <Box flex="1">
          <Badge colorScheme="teal" mb={4} fontSize="md">{category}</Badge>
          <Heading size="2xl" mb={4}>{name}</Heading>
          <Text fontSize="xl" color="gray.600" mb={4}>{description}</Text>
          <Text fontSize="3xl" fontWeight="bold" color="teal.500" mb={6}>${price}</Text>
          <Box pt={5} borderTop="1px solid" borderColor="gray.200">
            <Text mb={2} fontSize="sm" color="gray.500">Stock disponible: {stock}</Text>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemDetail;