/**
 * 
 * CARTCONTEXT & PROVIDER
 * This file implements the Global State Management for the shopping cart using React Context API.
 * Key Functionalities:
 * - Centralized State: Maintains the 'cart' array accessible from any component in the application.
 * - Cart Logic: Includes functions to add items (with duplicate detection), remove specific items, and clear the entire cart.
 * - Computed Properties: Automatically calculates 'totalQuantity' and 'totalPrice' using advanced array methods (reduce).
 * - Type Safety: Defines strict interfaces (CartItem, CartContextType) to ensure data integrity throughout the purchase flow.
 * - Provider Pattern: Wraps the application to supply the cart context to all child components.
 *
 * 
 * CARTCONTEXT Y PROVIDER
 * Este archivo implementa la Gestión de Estado Global para el carrito de compras utilizando la Context API de React.
 * Funcionalidades Clave:
 * - Estado Centralizado: Mantiene el array 'cart' accesible desde cualquier componente de la aplicación.
 * - Lógica del Carrito: Incluye funciones para agregar productos (con detección de duplicados), eliminar artículos específicos y vaciar el carrito por completo.
 * - Propiedades Computadas: Calcula automáticamente la 'totalQuantity' y el 'totalPrice' utilizando métodos avanzados de arrays (reduce).
 * - Seguridad de Tipos: Define interfaces estrictas (CartItem, CartContextType) para garantizar la integridad de los datos en todo el flujo de compra.
 * - Patrón Provider: Envuelve la aplicación para suministrar el contexto del carrito a todos los componentes hijos.
 */

import { createContext, useState, type ReactNode } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    img: string;
}

interface CartContextType {
    cart: CartItem[];
    addItem: (item: any, quantity: number) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
    isInCart: (itemId: string) => boolean;
    totalQuantity: number;
    total: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItem = (item: any, quantity: number) => {
        setCart(prevCart => {
            const itemExists = prevCart.find(prod => String(prod.id) === String(item.id));
            
            if (itemExists) {
                return prevCart.map(prod => 
                    String(prod.id) === String(item.id) 
                    ? { ...prod, quantity: prod.quantity + quantity } 
                    : prod
                );
            } else {
                return [...prevCart, { 
                    id: item.id, 
                    name: item.name || "Producto", 
                    price: item.price || 0, 
                    img: item.img || "", 
                    quantity 
                }];
            }
        });
    };

    const removeItem = (itemId: string) => {
        setCart(prev => prev.filter(prod => String(prod.id) !== String(itemId)));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId: string) => {
        return cart.some(prod => String(prod.id) === String(itemId));
    };

    // --- CÁLCULOS QUE ACTIVAN LOS BOTONES DE PAGO ---
    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    const total = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            isInCart, 
            totalQuantity, // Esto hará que el número en el icono cambie
            total          // Esto habilitará el botón de finalizar compra
        }}>
            {children}
        </CartContext.Provider>
    );
};