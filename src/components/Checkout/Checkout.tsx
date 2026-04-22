/**
 * 
 * CHECKOUT COMPONENT
 * This component manages the final stage of the purchase process.
 * Key Functionalities:
 * - Order Orchestration: Coordinates the creation of the purchase order by receiving data from CheckoutForm.
 * - Firebase Integration: Uses the 'addDoc' method to store the buyer's information, cart items, and total in Firestore.
 * - Global State Reset: Invokes 'clearCart' from the context only after a successful database transaction.
 * - Loading Management: Displays a visual spinner while the asynchronous operation with the database is in progress.
 * - User Feedback: Provides the final transaction ID to the user, fulfilling the requirement for clear order confirmation.
 * * 
 * COMPONENTE CHECKOUT
 * Este componente gestiona la etapa final del proceso de compra.
 * Funcionalidades Clave:
 * - Orquestación de la Orden: Coordina la creación de la orden de compra recibiendo los datos desde CheckoutForm.
 * - Integración con Firebase: Utiliza el método 'addDoc' para almacenar la información del comprador, productos y total en Firestore.
 * - Reinicio del Estado Global: Invoca 'clearCart' desde el contexto solo tras una transacción exitosa en la base de datos.
 * - Gestión de Carga: Muestra un indicador visual (spinner) mientras la operación asincrónica con la base de datos está en curso.
 * - Feedback al Usuario: Proporciona el ID final de la transacción al usuario, cumpliendo con el requisito de confirmación clara de la orden.
 */


import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore'; 
import CheckoutForm from './CheckoutForm';
import { Container, Heading, Text, Spinner, VStack, Box } from '@chakra-ui/react';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    // Usamos <any> para evitar errores de tipos en el contexto
    const context = useContext<any>(CartContext);
    const { cart, total, clearCart } = context;

    const createOrder = async (userData: any) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: userData,
                items: cart,
                total: total,
                date: new Date()
            };

            const ordersRef = collection(db, 'orders');
            const orderAdded = await addDoc(ordersRef, objOrder);

            setOrderId(orderAdded.id);
            clearCart(); // Limpia el carrito después de la compra exitosa
        } catch (error) {
            console.error("Error al generar la orden", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Container py={20} textAlign="center">
                <VStack gap="20px">
                    <Heading size="md">Generando su orden de compra...</Heading>
                    <Spinner size="xl" color="teal.500" />
                </VStack>
            </Container>
        );
    }

    if (orderId) {
        return (
            <Container py={20} textAlign="center">
                <Box p={10} borderWidth="1px" borderRadius="lg" bg="teal.50">
                    <Heading color="teal.700" mb={4}>¡Compra exitosa!</Heading>
                    <Text fontSize="xl">El ID de su orden de perfumes es: <b>{orderId}</b></Text>
                    <Text mt={4}>Guarde este código para el seguimiento de su pedido.</Text>
                </Box>
            </Container>
        );
    }

    return <CheckoutForm onConfirm={createOrder} />;
};

export default Checkout;