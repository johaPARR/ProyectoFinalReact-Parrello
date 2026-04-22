/**
 * 
 * ASYNCMOCK - LOCAL DATA SOURCE & API SIMULATION
 * This file serves as a mock database to simulate asynchronous API calls.
 * Key Functionalities:
 * - Data Modeling: Defines the 'Product' interface to ensure type safety across the application.
 * - Centralized Inventory: Stores the complete collection of fragrances, including descriptions, stock, and categories.
 * - Asynchronous Simulation: Uses Promises and 'setTimeout' to emulate network latency, allowing the testing of loading states (Spinners).
 * - Data Filtering: Provides helper functions to fetch all products, filter by category, or retrieve a single item by its ID.
 *
 * 
 * ASYNCMOCK - FUENTE DE DATOS LOCAL Y SIMULACIÓN DE API
 * Este archivo funciona como una base de datos simulada para emular llamadas asincrónicas a una API.
 * Funcionalidades Clave:
 * - Modelado de Datos: Define la interfaz 'Product' para garantizar la seguridad de tipos en toda la aplicación.
 * - Inventario Centralizado: Almacena la colección completa de fragancias, incluyendo descripciones, stock y categorías.
 * - Simulación Asincrónica: Utiliza Promesas y 'setTimeout' para emular la latencia de red, permitiendo probar los estados de carga (Spinners).
 * - Filtrado de Datos: Proporciona funciones auxiliares para obtener todos los productos, filtrar por categoría o recuperar un solo artículo por su ID.
 */


export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    img: string;
    stock: number;
    description: string;
}

export const products: Product[] = [
    // --- LOS 12 ORIGINALES ---
    // Quitamos el "." inicial para que la ruta sea "img/archivo"
    { id: '1', name: 'Sauvage (Dior) 50ml', price: 46000, category: 'masculino', img: 'img/sauvage.webp', stock: 10, description: 'Un acto de creación inspirado en espacios abiertos.' },
    { id: '2', name: 'Invictus (Paco Rabanne) 50ml', price: 40000, category: 'masculino', img: 'img/invictus.jpg', stock: 7, description: 'La esencia de la victoria con notas marinas.' },
    { id: '3', name: 'Armani Code 50ml', price: 43000, category: 'masculino', img: 'img/armani.jpg', stock: 5, description: 'Seducción absoluta con haba tonka.' },
    { id: '4', name: 'Olympea (Paco Rabanne) 50ml', price: 40000, category: 'femenino', img: 'img/olimpea.jpg', stock: 6, description: 'Una fragancia divina y sensual.' },
    { id: '5', name: 'Good Girl (Carolina Herrera) 50ml', price: 42000, category: 'femenino', img: 'img/good.webp', stock: 4, description: 'Sofisticada y atrevida.' },
    { id: '6', name: 'La Vie Est Belle (Lancôme) 50ml', price: 40000, category: 'femenino', img: 'img/lavida.webp', stock: 12, description: 'El aroma de la felicidad.' },
    { id: '7', name: 'La Nuit Trésor (Lancôme) 50ml', price: 40000, category: 'femenino', img: 'img/nuit.jpg', stock: 8, description: 'Un perfume apasionado y nocturno.' },
    { id: '8', name: 'Flower by Kenzo 50ml', price: 42000, category: 'femenino', img: 'img/flower.jpg', stock: 10, description: 'Un aroma floral empolvado.' },
    { id: '9', name: 'Kenzo Homme 50ml', price: 42000, category: 'masculino', img: 'img/kenzo.jpg', stock: 6, description: 'Fragancia amaderada marina.' },
    { id: '10', name: 'Blue Seduction (A. Banderas) 50ml', price: 45000, category: 'masculino', img: 'img/antonio.jpg', stock: 15, description: 'Frescura informal y espontánea.' },
    { id: '11', name: 'Amor Amor (Cacharel) 50ml', price: 46000, category: 'femenino', img: 'img/cacharel.jpg', stock: 9, description: 'El aroma de la pasión.' },
    { id: '12', name: 'Acqua di Gio Men 50ml', price: 48000, category: 'masculino', img: 'img/acqua.jpg', stock: 5, description: 'Inspirado en el mar y el sol.' },

    // --- NUEVOS MASCULINOS ---
    { id: '13', name: 'CK One Kelvin 50ml', price: 38000, category: 'masculino', img: 'img/onekelvin.webp', stock: 8, description: 'Pureza y frescura universal.' },
    { id: '14', name: 'Spicebomb Viktor&Rolf 50ml', price: 49000, category: 'masculino', img: 'img/spice.webp', stock: 5, description: 'Una fragancia futurista y magnética.' },
    { id: '15', name: 'Tom Ford Ombré 50ml', price: 65000, category: 'masculino', img: 'img/tomford.webp', stock: 3, description: 'Cuero intenso y sofisticación pura.' },
    { id: '16', name: 'Gucci Guilty 50ml', price: 52000, category: 'masculino', img: 'img/gucci.jpg', stock: 6, description: 'Para hombres audaces y libres.' },
    { id: '17', name: 'Cool Water (Davidoff) 50ml', price: 35000, category: 'masculino', img: 'img/cool.webp', stock: 12, description: 'La frescura del océano en tu piel.' },
    { id: '18', name: 'Fahrenheit (Dior) 50ml', price: 58000, category: 'masculino', img: 'img/farr.webp', stock: 4, description: 'Poderoso, amaderado y floral.' },
    { id: '19', name: 'Eros (Versace) 50ml', price: 54000, category: 'masculino', img: 'img/Versace.jpg', stock: 7, description: 'La fragancia del amor y la pasión.' },
    { id: '20', name: 'The One (D&G) 50ml', price: 51000, category: 'masculino', img: 'img/gentle.webp', stock: 5, description: 'Clásico, elegante y carismático.' },
    { id: '21', name: 'Dolce & Gabbana K 50ml', price: 50000, category: 'masculino', img: 'img/dolce.webp', stock: 6, description: 'Un aroma real para el hombre moderno.' },
    { id: '22', name: '212 Men (C. Herrera) 50ml', price: 49000, category: 'masculino', img: 'img/212.jpg', stock: 10, description: 'La energía de Nueva York.' },

    // --- NUEVOS FEMENINOS ---
    { id: '23', name: 'Fame (Paco Rabanne) 50ml', price: 47000, category: 'femenino', img: 'img/famme.webp', stock: 8, description: 'Joven, sensual y empoderada.' },
    { id: '24', name: 'Idôle (Lancôme) 50ml', price: 45000, category: 'femenino', img: 'img/idole.webp', stock: 9, description: 'Para las mujeres que sueñan en grande.' },
    { id: '25', name: 'Extase (Nina Ricci) 50ml', price: 44000, category: 'femenino', img: 'img/extase.webp', stock: 5, description: 'Un viaje erótico y sofisticado.' },
    { id: '26', name: 'My Way (Armani) 50ml', price: 53000, category: 'femenino', img: 'img/myway.webp', stock: 6, description: 'Soy lo que vivo.' },
    { id: '27', name: 'Scandal (JPG) 50ml', price: 56000, category: 'femenino', img: 'img/scandal.jpg', stock: 4, description: 'Una fragancia que rompe esquemas.' },
    { id: '28', name: 'Pure XS For Her 50ml', price: 51000, category: 'femenino', img: 'img/xsmujer.webp', stock: 7, description: 'Provocación y exceso magnético.' },
    { id: '29', name: 'Acqua di Gioia 50ml', price: 48000, category: 'femenino', img: 'img/acquamujer.webp', stock: 6, description: 'La esencia de la alegría y la naturaleza.' },
    { id: '30', name: '212 VIP Rose 50ml', price: 49000, category: 'femenino', img: 'img/212mujer.webp', stock: 11, description: 'La mejor fiesta está por empezar.' }
];

export const getProducts = (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductsByCategory = (categoryId: string): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(p => p.category === categoryId));
        }, 500);
    });
};

export const getProductById = (id: string): Promise<Product | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === id));
        }, 500);
    });
};