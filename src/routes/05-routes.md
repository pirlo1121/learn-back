# 05 - Rutas (Routes)

Las rutas son los puntos de entrada a nuestra API. Definen qué URL responde a qué acción.

---

## ¿Qué es una Ruta?

Una ruta es la combinación de:
- **Método HTTP** (GET, POST, PUT, DELETE)
- **URL / Endpoint** (/productos, /usuarios, etc.)
- **Controlador** (función que maneja la petición)

---

## Creamos el archivo de rutas

En la carpeta `routes` creamos un archivo llamado *product.routes.js*

product.routes.js:
```javascript
// Importamos Router de express
import { Router } from 'express';

// Creamos una instancia del router
const router = Router();

// Definimos las rutas
// GET - Obtener todos los productos
router.get('/', (req, res) => {
    res.json({ mensaje: 'Obtener todos los productos' });
});

// GET - Obtener un producto por ID
router.get('/:id', (req, res) => {
    res.json({ mensaje: `Obtener producto con id: ${req.params.id}` });
});

// POST - Crear un nuevo producto
router.post('/', (req, res) => {
    res.json({ mensaje: 'Crear un producto', data: req.body });
});

// PUT - Actualizar un producto
router.put('/:id', (req, res) => {
    res.json({ mensaje: `Actualizar producto con id: ${req.params.id}` });
});

// DELETE - Eliminar un producto
router.delete('/:id', (req, res) => {
    res.json({ mensaje: `Eliminar producto con id: ${req.params.id}` });
});

export default router;
```

---

# 05.1 - Implementación de las rutas en el servidor

*Vamos al archivo server.js e importamos las rutas*

server.js:
```javascript
import express from 'express';
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/product.routes.js'; // importamos las rutas

const app = express();

app.use(express.json());
connectDB();

// Usamos las rutas con un prefijo
app.use('/api/productos', productRoutes); // todas las rutas empezarán con /api/productos

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
```

---

# 05.2 - Endpoints disponibles

Con esta configuración, tenemos los siguientes endpoints:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/productos | Obtener todos los productos |
| GET | /api/productos/:id | Obtener un producto por ID |
| POST | /api/productos | Crear un nuevo producto |
| PUT | /api/productos/:id | Actualizar un producto |
| DELETE | /api/productos/:id | Eliminar un producto |

---

# 05.3 - Probando las rutas

*Ejecutamos el servidor*
```bash
npm run dev
```

*Probamos con Postman o cualquier cliente HTTP:*

- GET http://localhost:3000/api/productos
- POST http://localhost:3000/api/productos (con body JSON)
- GET http://localhost:3000/api/productos/123
- PUT http://localhost:3000/api/productos/123
- DELETE http://localhost:3000/api/productos/123

Ahora las rutas están funcionando, pero aún no hacen nada con la base de datos. En el siguiente capítulo implementaremos el CRUD completo.

[pasar a src/controllers/06-crud.md](https://github.com/pirlo1121/learn-back/blob/main/src/controllers/06-crud.md "NEXT")
