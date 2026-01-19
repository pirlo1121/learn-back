
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