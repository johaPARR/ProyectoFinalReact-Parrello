/**
 * * ITEMLISTCONTAINER COMPONENT
 * This is the main orchestrator for the product catalog.
 * Key Functionalities:
 * - Dynamic Data Fetching: Integrates with Firestore to retrieve the collection of products ("items").
 * - Filter Logic: Uses 'useParams' to detect a category; if present, it applies a query with the 'where' clause to filter the catalog.
 * - State Synchronization: Manages an array of products and a 'loading' status to control the visual flow of the application.
 * - Responsive Grid Display: Uses Chakra UI's SimpleGrid to render product cards adaptively across different screen sizes.
 * - Navigation: Links each item to its specific detail view using the unique ID provided by Firebase.
 *
 * * COMPONENTE ITEMLISTCONTAINER
 * Este es el orquestador principal para el catálogo de productos.
 * Funcionalidades Clave:
 * - Obtención Dinámica de Datos: Se integra con Firestore para recuperar la colección de productos ("items").
 * - Lógica de Filtrado: Utiliza 'useParams' para detectar una categoría; si existe, aplica una consulta con la cláusula 'where' para filtrar el catálogo.
 * - Sincronización de Estado: Gestiona un array de productos y un estado de 'loading' para controlar el flujo visual de la aplicación.
 * - Visualización en Cuadrícula Responsiva: Utiliza SimpleGrid de Chakra UI para renderizar las tarjetas de productos de forma adaptativa.
 * - Navegación: Vincula cada artículo a su vista de detalle específica utilizando el ID único proporcionado por Firebase.
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Container, Text, Spinner, Center, VStack, Button } from '@chakra-ui/react';
// 1. IMPORTAMOS FIREBASE
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    img: string;
    stock: number;
    description: string;
}

const ItemListContainer = ({ greeting }: { greeting: string }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>(); // Este es el ID de la categoría (HOMBRE/MUJER)

    useEffect(() => {
        setLoading(true);

        // 2. CONFIGURAMOS LA CONSULTA A FIREBASE
        const productsCollection = collection(db, "items");
        
        // Si hay una categoría (id), filtramos. Si no, traemos todo.
        const q = id 
            ? query(productsCollection, where("category", "==", id))
            : productsCollection;

        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Product[];
                
                setProducts(productsData);
            })
            .catch(error => console.error("Error al traer productos:", error))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <Center py={20}>
                <VStack gap={4}>
                    <Spinner color="teal.500" size="xl" />
                    <Text>Cargando catálogo de Araperful...</Text>
                </VStack>
            </Center>
        );
    }

    return (
        <Container maxW="container.xl" py={10}>
            <Heading mb={12} color="teal.600" textAlign="center" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold">
                {id ? `Categoría: ${id.toUpperCase()}` : greeting}
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
                {products.map(product => (
                    <Box key={product.id} p={5} shadow="lg" borderWidth="1px" borderRadius="2xl" transition="all 0.2s" _hover={{ transform: 'scale(1.02)', shadow: '2xl' }}>
                        {/* AHORA product.id ES EL CÓDIGO REAL DE FIREBASE */}
                        <Link to={`/item/${product.id}`} style={{ textDecoration: 'none' }}>
                            
                            {/* CORRECCIÓN: Se agrega BASE_URL para que GitHub Pages encuentre la ruta de la imagen */}
                            <img 
                                src={`${import.meta.env.BASE_URL}${product.img}`} 
                                alt={product.name} 
                                style={{ borderRadius: '15px', width: '100%', height: '280px', objectFit: 'cover' }} 
                            />
                            
                            <Box mt={4}>
                                <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
                                <Text color="teal.600" fontWeight="extrabold" fontSize="2xl" mb={4}>
                                    ${product.price.toLocaleString()}
                                </Text>
                                <Button colorScheme="teal" width="100%">Ver Detalle</Button>
                            </Box>
                        </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default ItemListContainer;