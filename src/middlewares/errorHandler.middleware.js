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
