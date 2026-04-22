/**
 * 
 * ITEMCOUNT COMPONENT
 * This component manages the logic for selecting the quantity of a specific product.
 * Key Functionalities:
 * - Internal State: Uses 'useState' to track the quantity selected by the user.
 * - Stock Control: Includes business logic to prevent the quantity from exceeding the available stock or falling below the initial value.
 * - Event Handling: Emits the selected quantity to the parent component via the 'onAdd' callback function.
 * - UI/UX: Provides an intuitive interface with increment/decrement buttons and a high-visibility call-to-action for the cart.
 *
 * 
 * COMPONENTE ITEMCOUNT
 * Este componente gestiona la lógica para seleccionar la cantidad de un producto específico.
 * Funcionalidades Clave:
 * - Estado Interno: Utiliza 'useState' para realizar el seguimiento de la cantidad seleccionada por el usuario.
 * - Control de Stock: Incluye lógica de negocio para evitar que la cantidad supere el stock disponible o sea inferior al valor inicial.
 * - Manejo de Eventos: Emite la cantidad seleccionada al componente padre a través de la función callback 'onAdd'.
 * - UI/UX: Proporciona una interfaz intuitiva con botones de incremento/decremento y una llamada a la acción de alta visibilidad para el carrito.
 */


// @ts-ignore
import { useState } from 'react';
// @ts-ignore
import { Button, HStack, Text, Box } from '@chakra-ui/react';

const ItemCount = ({ stock, initial, onAdd }: any) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <Box>
      <HStack maxW="200px" mb={4}>
        <Button onClick={decrement}>-</Button>
        <Text flex={1} textAlign="center" fontWeight="bold" fontSize="lg">
          {quantity}
        </Text>
        <Button onClick={increment}>+</Button>
      </HStack>
      
      {/* ESTO ES LO QUE ESTABA FALLANDO: El botón debe ejecutar onAdd(quantity) */}
      <Button 
        colorScheme="teal" 
        width="full" 
        size="lg"
        onClick={() => {
          console.log("BOTÓN PRESIONADO - Cantidad:", quantity);
          onAdd(quantity);
        }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;