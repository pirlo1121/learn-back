#  02 - Estructura del Proyecto

En esta etapa organizamos nuestro proyecto para mantener el código limpio, escalable y fácil de mantener.

---

##  Estructura recomendada
src = carptea principal donde estará gran parte del codigo ordenado en otras carpetas

- src/

    - routes/       # Aquí irán las rutas (endpoints)

    - controllers/  # Aquí va la lógica de cada ruta

    - models/       # Aquí irán los modelos (MongoDB / Mongoose)

    - middlewares/  # Funciones que interceptan peticiones (auth, logs, etc)

    - config/       # Configuración (BD, variables, etc)

- server.js       # servidor 

- Crearemos archivos base con estructura mínima (sin lógica aún), solo para ir armando el esqueleto del backend.

*crearemos un arhcivo javascript para trabajar con productos, un archivo en las siguientes carpetas ( routes, controllers, models )*

carptea models = products.model.js
carptea controllers = products.controller.js
carptea routes = products.route.js
