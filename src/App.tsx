//* ARAPERFUL - FULLTIENDA (React JS Final Project)
// * This is the main component of the Single Page Application (SPA).
//* Its primary function is to centralize the application structure by managing:
//* 1. Dynamic routing system using 'react-router-dom'.
//* 2. Persistent navigation via the NavBar component.
//* 3. Dynamic rendering of products and categories within the ItemListContainer.
// * The architecture is designed to provide seamless navigation without page refreshes,
//* meeting the standards of a modern, high-performance SPA.

//* ARAPERFUL - FULLTIENDA (Proyecto Final React JS)//
//* * Este es el componente principal de la Single Page Application (SPA).
//* Su función es centralizar la estructura de la aplicación, gestionando:
//* 1. El sistema de enrutamiento dinámico mediante 'react-router-dom'.
//* 2. La navegación persistente a través del componente NavBar.
//* 3. El renderizado dinámico de productos y categorías en el ItemListContainer.
// * La arquitectura está diseñada para permitir una navegación fluida sin recargas 
//* de página, cumpliendo con los estándares de una SPA moderna.


/* ARAPERFUL - FULLTIENDA (Proyecto Final React JS) */

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Componentes
import NavBar from './components/Nav/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'; 
import Checkout from './components/Checkout/Checkout';
import Contacto from './Contacto';

// 1. IMPORTAMOS EL NUEVO COMPONENTE DE GALERÍA
import Galeria from './components/Galeria'; 

// Contexto
import { CartProvider } from './context/CartContext';

function App() {

  useEffect(() => {
    // subirDatos();
  }, []);

  return (
    <CartProvider>
      <div>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greeting="Araperful - Perfúmate con Excelencia" />} 
          />
          <Route 
            path="/category/:id" 
            element={<ItemListContainer greeting="Explora nuestra selección por categoría" />} 
          />

          {/* 2. NUEVA RUTA PARA LA GALERÍA DE FRAGANCIAS */}
          <Route 
            path="/fragancias" 
            element={<Galeria />} 
          />

<Route 
  path="/contacto" 
  element={<Contacto />} 
/>

          <Route 
            path="/item/:id" 
            element={<ItemDetailContainer />} 
          />
          <Route 
            path="/cart" 
            element={<Cart />} 
          />
          <Route 
            path="/checkout" 
            element={<Checkout />} 
          />
          <Route 
            path="*" 
            element={
              <div style={{padding: '5rem', textAlign: 'center'}}>
                <h1>404 - Página no encontrada</h1>
              </div>
            } 
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;