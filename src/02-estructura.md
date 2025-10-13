#  02 - Estructura del Proyecto

En esta etapa organizamos nuestro proyecto para mantener el código limpio, escalable y fácil de mantener.

---

##  Estructura recomendada
*src* = carptea principal donde estará gran parte del codigo ordenado en otras carpetas

*carpetas dentro de src:*
    - routes, controllers, models, config, middlewares

- src/

    - routes/       # Aquí irán las rutas (endpoints)

    - controllers/  # Aquí va la lógica de cada ruta

    - models/       # Aquí irán los modelos (MongoDB / Mongoose)

    - middlewares/  # Funciones que interceptan peticiones (auth, logs, etc)

    - config/       # Configuración (BD, variables, etc)


