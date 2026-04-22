/**
 * 
 * GLOBAL THEME CONFIGURATION
 * This file centralizes the visual identity of the application using Chakra UI's Theming API.
 * Key Functionalities:
 * - Brand Customization: Defines the 'brand' color palette, ensuring consistency with Araperful's corporate identity.
 * - Design System Scalability: Provides a single point of truth for colors, typography, and component variants.
 * - Theme Extension: Uses 'extendTheme' to merge custom styles with Chakra's default system without losing built-in functionality.
 * - Global Accessibility: Facilitates high-contrast color management across all UI components.
 *
 * 
 * CONFIGURACIÓN DE TEMA GLOBAL
 * Este archivo centraliza la identidad visual de la aplicación utilizando la API de Theming de Chakra UI.
 * Funcionalidades Clave:
 * - Personalización de Marca: Define la paleta de colores 'brand', garantizando la consistencia con la identidad corporativa de Araperful.
 * - Escalabilidad del Sistema de Diseño: Proporciona un único punto de verdad para colores, tipografías y variantes de componentes.
 * - Extensión de Tema: Utiliza 'extendTheme' para fusionar estilos personalizados con el sistema por defecto de Chakra sin perder funcionalidades base.
 * - Accesibilidad Global: Facilita la gestión de colores de alto contraste en todos los componentes de la interfaz.
 */


// @ts-ignores
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      500: "#319795",
    },
  },
});

export default theme;