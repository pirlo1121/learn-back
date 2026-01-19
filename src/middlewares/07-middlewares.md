# 07 - Middlewares

Los middlewares son funciones que se ejecutan entre la petición del cliente y la respuesta del servidor. Son fundamentales para validaciones, autenticación, logs y manejo de errores.

---

## ¿Qué es un Middleware?

Un middleware es una función que tiene acceso a:
- **req** - Objeto de petición
- **res** - Objeto de respuesta
- **next** - Función para pasar al siguiente middleware

```
Cliente → Middleware 1 → Middleware 2 → Controlador → Respuesta
```

---

# 07.1 - Middleware de Logging

Creamos un middleware para registrar todas las peticiones.

*Creamos el archivo logger.middleware.js en la carpeta middlewares*

logger.middleware.js:
```javascript
// Middleware para registrar peticiones
export const loggerMiddleware = (req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[${fecha}] ${req.method} ${req.url}`);
    next(); // Importante: siempre llamar a next() para continuar
};
```

---

# 07.2 - Middleware de Validación

Creamos un middleware para validar que el body tenga los campos requeridos.

validateProduct.middleware.js:
```javascript
// Middleware para validar datos del producto
export const validateProduct = (req, res, next) => {
    const { nombre, precio } = req.body;

    // Validamos que existan los campos obligatorios
    if (!nombre || nombre.trim() === '') {
        return res.status(400).json({ 
            mensaje: 'El nombre es obligatorio' 
        });
    }

    if (!precio || typeof precio !== 'number' || precio <= 0) {
        return res.status(400).json({ 
            mensaje: 'El precio debe ser un número mayor a 0' 
        });
    }

    next(); // Si todo está bien, continuamos
};
```

---

# 07.3 - Middleware de Manejo de Errores

Un middleware especial para capturar errores en toda la aplicación.

errorHandler.middleware.js:
```javascript
// Middleware para manejar errores globales
export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    // Error de validación de Mongoose
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            mensaje: 'Error de validación',
            errores: Object.values(err.errors).map(e => e.message)
        });
    }

    // Error de ID inválido de MongoDB
    if (err.name === 'CastError') {
        return res.status(400).json({
            mensaje: 'ID inválido'
        });
    }

    // Error genérico
    res.status(500).json({
        mensaje: 'Error interno del servidor',
        error: err.message
    });
};
```

---

# 07.4 - Implementación de los Middlewares

server.js (actualizado):
```javascript
import express from 'express';
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/product.routes.js';
import { loggerMiddleware } from './src/middlewares/logger.middleware.js';
import { errorHandler } from './src/middlewares/errorHandler.middleware.js';

const app = express();

// Middlewares globales
app.use(express.json());
app.use(loggerMiddleware); // Logging de todas las peticiones

connectDB();

// Rutas
app.use('/api/productos', productRoutes);

// Middleware de errores (siempre al final)
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
```

---

# 07.5 - Usando Middleware en Rutas Específicas

Aplicamos el middleware de validación solo en las rutas que lo necesitan.

product.routes.js (actualizado):
```javascript
import { Router } from 'express';
import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} from '../controllers/product.controller.js';
import { validateProduct } from '../middlewares/validateProduct.middleware.js';

const router = Router();

// Rutas SIN validación
router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);
router.delete('/:id', eliminarProducto);

// Rutas CON validación (POST y PUT necesitan validar el body)
router.post('/', validateProduct, crearProducto);
router.put('/:id', validateProduct, actualizarProducto);

export default router;
```

---

# 07.6 - Flujo Completo de una Petición

```
1. Cliente envía POST /api/productos con body JSON

2. express.json() parsea el body

3. loggerMiddleware registra la petición

4. Router dirige a /api/productos

5. validateProduct valida los datos
   └── Si hay error → Responde 400
   └── Si está OK → Continúa

6. crearProducto crea el producto en MongoDB
   └── Si hay error → errorHandler lo captura
   └── Si está OK → Responde 201

7. Cliente recibe respuesta
```

---

# 07.7 - Tipos de Middlewares

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Aplicación** | Se aplica a toda la app | `app.use(express.json())` |
| **Router** | Se aplica a un grupo de rutas | `router.use(authMiddleware)` |
| **Ruta** | Se aplica a una ruta específica | `router.post('/', validateProduct, controller)` |
| **Error** | Maneja errores (4 parámetros) | `app.use(errorHandler)` |

---

¡Felicidades! Ya conoces los conceptos fundamentales de Express:
- ✅ Crear un servidor
- ✅ Estructurar el proyecto
- ✅ Conectar a MongoDB
- ✅ Crear Modelos y Schemas
- ✅ Definir Rutas
- ✅ Implementar CRUD
- ✅ Usar Middlewares
