# 06 - CRUD Completo

En este capítulo implementaremos las operaciones CRUD (Create, Read, Update, Delete) conectadas a la base de datos MongoDB.

---

## ¿Qué es CRUD?

CRUD son las cuatro operaciones básicas de almacenamiento persistente:

| Operación | Método HTTP | Descripción |
|-----------|-------------|-------------|
| **C**reate | POST | Crear un nuevo registro |
| **R**ead | GET | Leer/Obtener registros |
| **U**pdate | PUT/PATCH | Actualizar un registro |
| **D**elete | DELETE | Eliminar un registro |

---

# 06.1 - Creamos el Controlador

Los controladores contienen la lógica de negocio. Creamos el archivo *product.controller.js* en la carpeta `controllers`

product.controller.js:
```javascript
// Importamos el modelo de Producto
import Producto from '../models/product.model.js';

// CREATE - Crear un nuevo producto
export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear producto', error: error.message });
    }
};

// READ - Obtener todos los productos
export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
    }
};

// READ - Obtener un producto por ID
export const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener producto', error: error.message });
    }
};

// UPDATE - Actualizar un producto
export const actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Retorna el documento actualizado
        );
        if (!productoActualizado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(productoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar producto', error: error.message });
    }
};

// DELETE - Eliminar un producto
export const eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar producto', error: error.message });
    }
};
```

---

# 06.2 - Actualizamos las Rutas

Ahora conectamos las rutas con los controladores

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

const router = Router();

// GET - Obtener todos los productos
router.get('/', obtenerProductos);

// GET - Obtener un producto por ID
router.get('/:id', obtenerProductoPorId);

// POST - Crear un nuevo producto
router.post('/', crearProducto);

// PUT - Actualizar un producto
router.put('/:id', actualizarProducto);

// DELETE - Eliminar un producto
router.delete('/:id', eliminarProducto);

export default router;
```

---

# 06.3 - Probando el CRUD

*Ejecutamos el servidor*
```bash
npm run dev
```

## Crear un producto (POST)
```bash
# Usando curl
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Televisor", "precio": 600000, "descripcion": "TV 55 pulgadas", "stock": 10}'
```

*En Postman:*
- Método: POST
- URL: http://localhost:3000/api/productos
- Body (JSON):
```json
{
    "nombre": "Televisor",
    "precio": 600000,
    "descripcion": "TV 55 pulgadas",
    "stock": 10
}
```

## Obtener todos los productos (GET)
```bash
curl http://localhost:3000/api/productos
```

## Obtener un producto por ID (GET)
```bash
curl http://localhost:3000/api/productos/ID_DEL_PRODUCTO
```

## Actualizar un producto (PUT)
```bash
curl -X PUT http://localhost:3000/api/productos/ID_DEL_PRODUCTO \
  -H "Content-Type: application/json" \
  -d '{"precio": 550000}'
```

## Eliminar un producto (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/productos/ID_DEL_PRODUCTO
```

---

# 06.4 - Códigos de Estado HTTP

Es importante usar los códigos de estado correctos:

| Código | Significado | Uso |
|--------|-------------|-----|
| 200 | OK | Petición exitosa |
| 201 | Created | Recurso creado correctamente |
| 400 | Bad Request | Error en los datos enviados |
| 404 | Not Found | Recurso no encontrado |
| 500 | Internal Server Error | Error del servidor |

---

¡Ya tenemos un CRUD completo funcionando con MongoDB!

[pasar a src/middlewares/07-middlewares.md](https://github.com/pirlo1121/learn-back/blob/main/src/middlewares/07-middlewares.md "NEXT")
