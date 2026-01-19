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
