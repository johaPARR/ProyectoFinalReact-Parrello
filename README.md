# 🛒 Final Project Integrator - React JS (E-commerce SPA)

This project is a web application of type e-commerce developed with React JS as part of the final integrative project of the course.

The application works as a **Single Page Application (SPA)**, allowing navigation between sections without reloading the page.

---

## 🚀 Project Objective

Develop an e-commerce interface where users can:

- Browse a product catalog
- View product details
- Add products to the cart
- Manage the shopping cart
- Complete a purchase through a checkout process

---

## 🧱 Technologies Used

- React JS
- Vite
- React Router DOM
- Context API
- Firebase / Firestore
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 🧩 Project Architecture

The application is structured using reusable components:

### 📌 Main Components

- `NavBar` → main site navigation
- `CartWidget` → cart icon and access
- `ItemListContainer` → product catalog container
- `ItemList` → product list
- `Item` → individual product
- `ItemDetailContainer` → product detail container
- `ItemDetail` → product detail view
- `ItemCount` → quantity selector
- `Cart` → shopping cart
- `CheckoutForm` → purchase form

---

## 🌐 Navigation (React Router)

The application uses React Router to simulate an SPA:

- `/` → product catalog
- `/category/:id` → products by category
- `/item/:id` → product detail
- `/cart` → shopping cart
- `/checkout` → purchase completion

---

## 🛒 Cart Management (Context API)

The shopping cart is managed using **Context API**, allowing global state management.

### 📦 Stored data:
- Added products
- Product quantities
- Total price

### ⚙️ Features:
- Add products to cart
- Remove products
- Clear cart
- Calculate total price

---

## 🔥 Firebase / Firestore

Firestore is used as a cloud database.

### 📁 Products collection:
Each product contains:
- id
- name
- price
- stock
- category
- image

### 🧾 Orders:

When a purchase is completed, an order is generated containing:
- Buyer information
- Selected products
- Quantities
- Total price
- Purchase date

---

## 🎯 User Experience

Different UI states are implemented:

- ⏳ Loading spinner while fetching data
- ⚠️ Message if product is out of stock
- 🛒 Empty cart message
- ✅ Successful purchase confirmation
- 🆔 Display of generated order ID

---

## 📦 Project Installation

```bash
git clone https://github.com/johaPARR/ProyectoFinalReact-Parrello.git






# 🛒 Proyecto Final Integrador - React JS (E-commerce SPA)

Este proyecto es una aplicación web de tipo e-commerce desarrollada con React JS como parte del trabajo final integrador del curso.

La aplicación funciona como una **Single Page Application (SPA)**, permitiendo la navegación entre secciones sin recargar la página.

---

## 🚀 Objetivo del proyecto

Desarrollar una interfaz de e-commerce donde los usuarios puedan:

- Explorar un catálogo de productos
- Ver detalles de cada producto
- Agregar productos al carrito
- Gestionar el carrito de compras
- Finalizar una compra mediante un checkout

---

## 🧱 Tecnologías utilizadas

- React JS
- Vite
- React Router DOM
- Context API
- Firebase / Firestore
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 🧩 Arquitectura del proyecto

La aplicación está estructurada mediante componentes reutilizables:

### 📌 Componentes principales

- `NavBar` → navegación principal del sitio
- `CartWidget` → icono y acceso al carrito
- `ItemListContainer` → contenedor del catálogo
- `ItemList` → lista de productos
- `Item` → producto individual
- `ItemDetailContainer` → contenedor del detalle
- `ItemDetail` → información detallada del producto
- `ItemCount` → selector de cantidad
- `Cart` → carrito de compras
- `CheckoutForm` → formulario de compra

---

## 🌐 Navegación (React Router)

La aplicación utiliza React Router para simular una SPA:

- `/` → catálogo de productos
- `/category/:id` → productos por categoría
- `/item/:id` → detalle del producto
- `/cart` → carrito de compras
- `/checkout` → finalización de compra

---

## 🛒 Gestión del carrito (Context API)

El carrito de compras se gestiona mediante **Context API**, permitiendo estado global.

### 📦 Datos almacenados:
- Productos agregados
- Cantidad por producto
- Precio total

### ⚙️ Funcionalidades:
- Agregar productos al carrito
- Eliminar productos
- Vaciar carrito
- Calcular total de compra

---

## 🔥 Firebase / Firestore

Se utiliza Firestore como base de datos en la nube.

### 📁 Colección: productos
Cada producto contiene:
- id
- nombre
- precio
- stock
- categoría
- imagen

### 🧾 Órdenes de compra

Al finalizar la compra se genera una orden con:
- Datos del comprador
- Productos seleccionados
- Cantidades
- Precio total
- Fecha de compra

---

## 🎯 Experiencia de usuario

Se implementan distintos estados de interfaz:

- ⏳ Loader durante la carga de datos
- ⚠️ Mensaje si un producto no tiene stock
- 🛒 Mensaje de carrito vacío
- ✅ Confirmación de compra exitosa
- 🆔 Visualización del ID de la orden generada

---

## 📦 Instalación del proyecto

```bash
git clone https://github.com/johaPARR/ProyectoFinalReact-Parrello.git