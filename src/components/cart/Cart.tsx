/**
 * 
 * CART COMPONENT
 * This component is responsible for rendering the shopping cart view. 
 * It consumes the 'CartContext' to access the global state of selected products.
 * Key features:
 * - Conditional rendering: Displays a message if the cart is empty.
 * - Interaction: Allows users to remove individual items or clear the entire cart.
 * - Calculation: Shows subtotals per product and the final total price.
 * - Navigation: Provides links to return to the shop or proceed to the checkout.
 * * 
 * COMPONENTE CARRITO
 * Este componente se encarga de renderizar la vista del carrito de compras.
 * Consume el 'CartContext' para acceder al estado global de los productos seleccionados.
 * Características principales:
 * - Renderizado condicional: Muestra un mensaje si el carrito está vacío.
 * - Interacción: Permite a los usuarios eliminar productos individuales o vaciar el carrito completo.
 * - Cálculo: Muestra subtotales por producto y el precio total final.
 * - Navegación: Proporciona enlaces para volver a la tienda o proceder al checkout.
 */

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { 
    Box, 
    Button, 
    Container, 
    Heading, 
    Text, 
    VStack, 
    HStack, 
    Image, 
    Flex 
} from '@chakra-ui/react';

const Cart = () => {
    // ENGLISH: Accessing the global cart context
    // ESPAÑOL: Acceso al contexto global del carrito
    const context = useContext<any>(CartContext);

    // ENGLISH: Safety check to ensure the Provider is wrapping the app
    // ESPAÑOL: Verificación de seguridad para asegurar que el Provider envuelve la app
    if (!context) {
        return (
            <Container py={20}>
                <Text>Error: No se encontró el CartProvider. Verifica App.tsx</Text>
            </Container>
        );
    }

    const { cart, clearCart, removeItem, total } = context;

    // ENGLISH: Conditional rendering for an empty cart state
    // ESPAÑOL: Renderizado condicional para el estado de carrito vacío
    if (!cart || cart.length === 0) {
        return (
            <Container maxW="container.md" py={20} textAlign="center">
                <VStack gap="24px">
                    <Heading>Tu carrito está vacío</Heading>
                    <Text>Parece que aún no has elegido ningún perfume.</Text>
                    <Link to="/">
                        <Button colorScheme="teal" size="lg">Volver a la tienda</Button>
                    </Link>
                </VStack>
            </Container>
        );
    }

    return (
        <Container maxW="container.lg" py={10}>
            <Heading mb={10}>Tu Carrito</Heading>
            
            {/* ENGLISH: List of products added to the cart */}
            {/* ESPAÑOL: Lista de productos agregados al carrito */}
            <VStack gap="20px" align="stretch">
                {cart.map((p: any) => (
                    <Box key={p.id} p={5} borderWidth="1px" borderRadius="lg">
                        <Flex align="center" justify="space-between" direction={{ base: 'column', md: 'row' }}>
                            <HStack gap="16px">
                                <Image src={p.img} alt={p.name} boxSize="80px" objectFit="cover" borderRadius="md" />
                                <VStack align="start" gap="0">
                                    <Text fontWeight="bold" fontSize="lg">{p.name}</Text>
                                    <Text color="gray.600">Cantidad: {p.quantity}</Text>
                                    <Text color="gray.600">Precio unitario: ${p.price}</Text>
                                </VStack>
                            </HStack>
                            
                            <HStack gap="40px" mt={{ base: 4, md: 0 }}>
                                <Text fontWeight="bold" fontSize="xl">Subtotal: ${p.price * p.quantity}</Text>
                                {/* ENGLISH: Button to remove a specific item */}
                                {/* ESPAÑOL: Botón para eliminar un artículo específico */}
                                <Button colorScheme="red" variant="ghost" onClick={() => removeItem(p.id)}>Eliminar</Button>
                            </HStack>
                        </Flex>
                    </Box>
                ))}
            </VStack>

            <Box borderTopWidth="1px" borderColor="gray.200" my={10} />

            {/* ENGLISH: Cart footer with total price and action buttons */}
            {/* ESPAÑOL: Pie del carrito con el precio total y botones de acción */}
            <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap="20px">
                <Button colorScheme="gray" variant="outline" onClick={clearCart}>Vaciar Carrito</Button>
                <HStack gap="32px">
                    <Text fontSize="2xl" fontWeight="bold">Total: ${total}</Text>
                    <Link to="/checkout">
                        <Button colorScheme="teal" size="lg">Finalizar Compra</Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Cart;