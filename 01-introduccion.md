# 01 - Creación del entorno
en la terminal ejecutamos el siguiente comando

```bash
    -npm init 
```
Ese comando creará el proyecto con NodeJS, y generará un archivo llamado package.json, donde se registran dependencias y scripts.

Instalamos dependencias con el comando (npm install "dependencia") o (npm i "dependencia")

*Forma larga*
```bash
    -npm install express
```
*Forma corta*
```bash
    -npm i express
```

- En este caso usaremos una importación modular y crearemos un script, así que hay que cambiar algo ligero en el archivo package.json

Así que simplemente agregaremos 2 líneas de código:

"dev": "node --watch server.js"
"type": "module"

```json
    {
  "name": "learn-backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch server.js" // agregamos esta linea
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.1.0" 
  },
  "type": "module"  // agregamos esta linea de codigo
}
```




# 02 - Creamos archivo principal

Creamos un archivo server.js - este archivo será nuestro servidor

server.js:
```javascript
// Importamos la librería express
import express from 'express';

// Aquí podremos utilizar todas las herramientas de express a través de la constante app
const app = express();

// Middleware para leer JSON ( esto nos permite recibir objetos JSON en la app)
app.use(express.json());

// Rutas (aún no tenemos)


// Iniciar servidor
const PORT = 3000; // Puerto donde ejecutaremos la app

// Nuestra app se enciende cuando utilizamos el método listen()
app.listen(PORT, () => { // Servidor funcionando en el puerto 3000
    console.log(`Servidor en http://localhost:${PORT}`);
});

```

Ya tenemos la base de nuestra app, y dicha app se encuentra en la ruta http://localhost:3000

*http://localhost:* = esto hace referencia a que nuestra app solo existe en nuestra computadora

*3000* = es el puerto de nuestra computadora donde se encuentra la app

Por último, debemos ejecutar la app con el script que habíamos creado en el package.json:

```json
    "dev": "node --watch server.js" // nuestro script
```

Para ejecutarlo simplemente escribimos en la terminal (de preferencia bash)
npm run dev
```bash
    npm run dev
```

Ese comando ejecutará nuestra app, y si todo sale correcto podremos visualizar el mensaje *"Servidor en *http://localhost:3000"*