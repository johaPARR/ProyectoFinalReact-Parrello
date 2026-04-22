/**
 * 
 * ITEMDETAILCONTAINER COMPONENT
 * This is a container component responsible for the logic of fetching a single product's data.
 * Key Functionalities:
 * - Routing Integration: Uses 'useParams' to capture the unique product ID from the URL.
 * - Firebase Data Fetching: Connects to the "items" collection in Firestore using 'getDoc' to retrieve specific document data.
 * - State Management: Handles 'loading' states to improve UX and 'product' state to store the retrieved data.
 * - Error Handling & Navigation: Managed through conditional rendering; if a product doesn't exist, it provides a way to navigate back to the home page.
 * - Component Delegation: Once data is ready, it passes the information to the 'ItemDetail' presentational component.
 *
 * 
 * COMPONENTE ITEMDETAILCONTAINER
 * Este es un componente contenedor encargado de la lógica de obtención de datos de un solo producto.
 * Funcionalidades Clave:
 * - Integración de Rutas: Utiliza 'useParams' para capturar el ID único del producto desde la URL.
 * - Obtención de Datos de Firebase: Se conecta a la colección "items" en Firestore usando 'getDoc' para recuperar los datos de un documento específico.
 * - Gestión de Estado: Maneja estados de 'loading' para mejorar la UX y el estado 'product' para almacenar los datos recuperados.
 * - Manejo de Errores y Navegación: Gestionado mediante renderizado condicional; si un producto no existe, ofrece una vía para volver a la página principal.
 * - Delegación de Componentes: Una vez que los datos están listos, pasa la información al componente de presentación 'ItemDetail'.
 */


import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Center, Spinner, VStack, Text, Button } from '@chakra-ui/react';

// --- IMPORTACIÓN DE FIREBASE ---
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase"; 

// Importamos el componente de detalle
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setLoading(true);
            const docRef = doc(db, "items", id);

            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setProduct({ id: snapshot.id, ...snapshot.data() });
                    } else {
                        setProduct(null);
                    }
                })
                .catch(err => console.error("Error Firebase:", err))
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) {
        return (
            <Center py={20}>
                {/* Solución definitiva: Solo color y tamaño para evitar errores de versión */}
                <Spinner size="xl" color="teal.500" />
            </Center>
        );
    }

    if (!product) {
        return (
            <Center py={20}>
                <VStack gap={4}>
                    <Text fontSize="xl" fontWeight="bold">Fragancia no encontrada</Text>
                    <Button onClick={() => navigate('/')} colorScheme="teal">Volver</Button>
                </VStack>
            </Center>
        );
    }

    return <ItemDetail {...product} />;
};

export default ItemDetailContainer;