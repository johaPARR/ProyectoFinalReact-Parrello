/**
 * 
 * FIREBASE CONFIGURATION & SERVICE INITIALIZATION
 * This module establishes the bridge between the React frontend and the Google Cloud Infrastructure.
 * Key Functionalities:
 * - SDK Setup: Configures the Firebase application instance using the project's unique environmental credentials.
 * - Firestore Connection: Initializes the Cloud Firestore database instance, enabling real-time data persistence.
 * - Scalability: Provides a centralized entry point for data operations (Items, Categories, and Orders).
 * - Security Integration: Acts as the foundation for future implementation of Firebase Authentication and security rules.
 *
 * 
 * CONFIGURACIÓN E INICIALIZACIÓN DE SERVICIOS FIREBASE
 * Este módulo establece el puente entre el frontend en React y la infraestructura de Google Cloud.
 * Funcionalidades Clave:
 * - Configuración del SDK: Configura la instancia de la aplicación Firebase utilizando las credenciales únicas del proyecto.
 * - Conexión a Firestore: Inicializa la instancia de la base de datos Cloud Firestore, permitiendo la persistencia de datos en tiempo real.
 * - Escalabilidad: Proporciona un punto de entrada centralizado para las operaciones de datos (Productos, Categorías y Órdenes).
 * - Integración de Seguridad: Actúa como la base para la futura implementación de Firebase Authentication y reglas de seguridad de acceso.
 */


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Datos reales de tu proyecto araperful-react
const firebaseConfig = {
  apiKey: "AIzaSyAPtu8K6Y_9w3LCEaqX EchKe1Qe56lGs1M",
  authDomain: "araperful-react.firebaseapp.com",
  projectId: "araperful-react",
  storageBucket: "araperful-react.firebasestorage.app",
  messagingSenderId: "513255726387",
  appId: "1:513255726387:web:183e1621ee154a5fbef246",
  measurementId: "G-TH4M9MCJKZ"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos y exportamos la base de datos Firestore
export const db = getFirestore(app);