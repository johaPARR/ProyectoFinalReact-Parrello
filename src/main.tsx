/**
 * 
 * MAIN ENTRY POINT (main.tsx)
 * This is the architectural foundation where the React application is bootstrapped.
 * Key Functionalities:
 * - DOM Mounting: Uses ReactDOM to inject the React component tree into the 'root' element of the HTML.
 * - Routing Architecture: Wraps the application in 'BrowserRouter' to enable SPA (Single Page Application) navigation capabilities.
 * - Design System Integration: Initializes 'ChakraProvider' with the 'defaultSystem' to provide consistent UI components and theming globally.
 * - Development Integrity: Implements 'React.StrictMode' to catch potential problems and encourage best practices during the development lifecycle.
 *
 * 
 * PUNTO DE ENTRADA PRINCIPAL (main.tsx)
 * Esta es la base arquitectónica donde se inicia la aplicación React.
 * Funcionalidades Clave:
 * - Montaje del DOM: Utiliza ReactDOM para inyectar el árbol de componentes de React en el elemento 'root' del HTML.
 * - Arquitectura de Rutas: Envuelve la aplicación en 'BrowserRouter' para habilitar las capacidades de navegación de una SPA (Single Page Application).
 * - Integración del Sistema de Diseño: Inicializa 'ChakraProvider' con el 'defaultSystem' para proporcionar componentes de UI y estilos consistentes de forma global.
 * - Integridad de Desarrollo: Implementa 'React.StrictMode' para detectar problemas potenciales y fomentar las mejores prácticas durante el ciclo de vida del desarrollo.
 */


import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react' 
import { BrowserRouter } from 'react-router-dom' 
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Agregamos el basename para que las rutas funcionen en GitHub Pages */}
    <BrowserRouter basename="/ProyectoFinalReact-Parrello">
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)