/* 
 * CARTWIDGET COMPONENT
 * This component displays the shopping cart icon within the navigation bar.
 * Key Functionalities:
 * - Context Consumption: Retrieves the 'totalQuantity' of items from the CartContext.
 * - Dynamic Badge: Uses conditional rendering to show a notification badge only when there are items in the cart.
 * - Navigation: Acts as a shortcut link that redirects the user to the detailed Cart view.
 * - Resilience: Includes a fallback UI in case the context is not yet available.
 * * 
 * COMPONENTE CARTWIDGET
 * Este componente muestra el ícono del carrito de compras dentro de la barra de navegación.
 * Funcionalidades Clave:
 * - Consumo de Contexto: Obtiene la cantidad total de artículos ('totalQuantity') desde el CartContext.
 * - Notificación Dinámica: Utiliza renderizado condicional para mostrar un círculo indicador solo cuando hay productos en el carrito.
 * - Navegación: Actúa como un enlace de acceso directo que redirige al usuario a la vista detallada del Carrito.
 * - Resiliencia: Incluye una interfaz de reserva en caso de que el contexto no esté disponible inicialmente.
 */


import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";

const CartWidget = () => {
    // Traemos la cantidad real desde el contexto
    const context = useContext(CartContext);

    // Si el contexto no cargó o no existe, devolvemos el diseño básico
    if (!context) {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>🛒</span>
            </div>
        );
    }

    const { totalQuantity } = context;

    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '1.5rem' }}>🛒</span>
                
                {/* Solo mostramos el círculo rojo si hay más de 0 productos */}
                {totalQuantity > 0 && (
                    <span style={{ 
                        backgroundColor: 'red', 
                        color: 'white', 
                        borderRadius: '50%', 
                        padding: '2px 8px', 
                        fontSize: '0.8rem',
                        marginLeft: '5px',
                        fontWeight: 'bold'
                    }}>
                        {totalQuantity}
                    </span>
                )}
            </div>
        </Link>
    );
};

export default CartWidget;