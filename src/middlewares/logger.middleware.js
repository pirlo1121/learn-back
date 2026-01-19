// Middleware para registrar peticiones
export const loggerMiddleware = (req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[${fecha}] ${req.method} ${req.url}`);
    next(); // Importante: siempre llamar a next() para continuar
};
