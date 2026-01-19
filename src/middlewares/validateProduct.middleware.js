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
